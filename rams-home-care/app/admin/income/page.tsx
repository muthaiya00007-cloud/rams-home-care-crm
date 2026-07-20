"use client";

import { useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import IncomeModal from "@/components/admin/IncomeModal";
import {
  getIncome,
  deleteIncome,
  Income,
} from "@/components/lib/income";

export default function IncomePage() {
  const [income, setIncome] = useState<Income[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedIncome, setSelectedIncome] =
    useState<Income | null>(null);
  const [search, setSearch] = useState("");

  async function loadIncome() {
    setLoading(true);

    const { data, error } = await getIncome();

    if (error) {
      console.error(error);
      setIncome([]);
    } else {
      setIncome(data ?? []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadIncome();
  }, []);

  const filteredIncome = useMemo(() => {
    const q = search.toLowerCase();

    return income.filter(
      (item) =>
        item.customer_name.toLowerCase().includes(q) ||
        (item.payment_method || "")
          .toLowerCase()
          .includes(q) ||
        (item.notes || "")
          .toLowerCase()
          .includes(q)
    );
  }, [income, search]);

  async function handleDelete(id: number) {
    if (!confirm("Delete this income record?")) return;

    const { error } = await deleteIncome(id);

    if (error) {
      alert(error.message);
      return;
    }

    loadIncome();
  }

  const totalIncome = income.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-3xl font-bold">
                Income Management
              </h1>

              <p className="text-gray-500 mt-1">
                Total Income :
                <span className="font-bold text-green-600 ml-2">
                  ₹{totalIncome}
                </span>
              </p>
            </div>

            <div className="flex gap-3">

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="border rounded-lg px-4 py-2 w-72"
              />

              <button
                onClick={() => {
                  setSelectedIncome(null);
                  setOpen(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
              >
                + Add Income
              </button>

            </div>

          </div>
                    <div className="bg-white rounded-xl shadow overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left">Customer</th>
                  <th className="px-6 py-4 text-left">Amount</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Method</th>
                  <th className="px-6 py-4 text-left">Notes</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>

                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8">
                      Loading...
                    </td>
                  </tr>
                ) : filteredIncome.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8">
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
                        ₹{item.amount}
                      </td>

                      <td className="px-6 py-4">
                        {item.payment_date}
                      </td>

                      <td className="px-6 py-4">
                        {item.payment_method || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {item.notes || "-"}
                      </td>

                      <td className="px-6 py-4 text-center space-x-2">

                        <button
                          onClick={() => {
                            setSelectedIncome(item);
                            setOpen(true);
                          }}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item.id!)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>

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