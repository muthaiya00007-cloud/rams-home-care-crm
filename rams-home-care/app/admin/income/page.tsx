"use client";

import { useEffect, useMemo, useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import IncomeModal from "@/components/admin/IncomeModal";

import {
  Income,
  getIncome,
  deleteIncome,
} from "@/components/lib/income";

export default function IncomePage() {
  const [income, setIncome] = useState<Income[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [selectedIncome, setSelectedIncome] =
    useState<Income | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadIncome();
  }, []);

  async function loadIncome() {
    try {
      setLoading(true);

      const data = await getIncome();

      setIncome(data ?? []);
    } catch (err) {
      console.error(err);
      setIncome([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const ok = confirm(
      "Are you sure you want to delete this income record?"
    );

    if (!ok) return;

    try {
      await deleteIncome(id);

      await loadIncome();
    } catch (err) {
      console.error(err);
      alert("Failed to delete income.");
    }
  }

  const filteredIncome = useMemo(() => {
    const keyword = search.toLowerCase();

    return income.filter((item) => {
      return (
        item.customer_name
          .toLowerCase()
          .includes(keyword) ||

        (item.payment_method || "")
          .toLowerCase()
          .includes(keyword) ||

        (item.notes || "")
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [income, search]);

  const totalIncome = filteredIncome.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
    return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6">

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-3xl font-bold">
                Income Management
              </h1>

              <p className="mt-1 text-gray-500">
                Total Income :
                <span className="ml-2 font-bold text-green-600">
                  ₹{totalIncome.toLocaleString()}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">

              <input
                type="text"
                placeholder="Search income..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-72 rounded-lg border px-4 py-2"
              />

              <button
                onClick={() => {
                  setSelectedIncome(null);
                  setOpen(true);
                }}
                className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
              >
                + Add Income
              </button>

            </div>

          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow">

            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-gray-100">

                  <tr>
                    <th className="px-6 py-4 text-left">Customer</th>
                    <th className="px-6 py-4 text-left">Amount</th>
                    <th className="px-6 py-4 text-left">Payment Date</th>
                    <th className="px-6 py-4 text-left">Method</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>

                </thead>

                <tbody>

                  {loading ? (

                    <tr>
                      <td
                        colSpan={6}
                        className="py-10 text-center"
                      >
                        Loading...
                      </td>
                    </tr>

                  ) : filteredIncome.length === 0 ? (

                    <tr>
                      <td
                        colSpan={6}
                        className="py-10 text-center text-gray-500"
                      >
                        No Income Records Found
                      </td>
                    </tr>

                  ) : (

                    filteredIncome.map((item) => (
                      <tr
                        key={item.id}
                        className="border-t hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          {item.customer_name}
                        </td>

                        <td className="px-6 py-4 font-semibold text-green-600">
                          ₹{Number(item.amount).toLocaleString()}
                        </td>

                        <td className="px-6 py-4">
                          {item.payment_date || "-"}
                        </td>

                        <td className="px-6 py-4">
                          {item.payment_method || "-"}
                        </td>

                        <td className="px-6 py-4">
                          {item.notes || "-"}
                        </td>

                        <td className="px-6 py-4">

                          <div className="flex justify-center gap-2">

                            <button
                              onClick={() => {
                                setSelectedIncome(item);
                                setOpen(true);
                              }}
                              className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => {
                                if (item.id) {
                                  handleDelete(item.id);
                                }
                              }}
                              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>
                    ))

                  )}

                </tbody>

              </table>

            </div>

          </div>
                    <IncomeModal
            open={open}
            income={selectedIncome}
            onClose={() => {
              setOpen(false);
              setSelectedIncome(null);
              loadIncome();
            }}
          />

        </main>
      </div>
    </div>
  );
}