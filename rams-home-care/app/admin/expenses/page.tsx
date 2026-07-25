"use client";

import { useEffect, useMemo, useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import ExpenseModal from "@/components/admin/ExpenseModal";

import {
  Expense,
  getExpenses,
  deleteExpense,
} from "@/components/lib/expenses";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [selectedExpense, setSelectedExpense] =
    useState<Expense | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadExpenses();
  }, []);

  async function loadExpenses() {
    try {
      setLoading(true);

      const data = await getExpenses();

      setExpenses(data ?? []);
    } catch (err) {
      console.error(err);
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const ok = confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!ok) return;

    try {
      await deleteExpense(id);

      await loadExpenses();
    } catch (err) {
      console.error(err);
      alert("Failed to delete expense.");
    }
  }

  const filteredExpenses = useMemo(() => {
    const keyword = search.toLowerCase();

    return expenses.filter((expense) => {
      return (
        expense.expense_name
          .toLowerCase()
          .includes(keyword) ||

        (expense.payment_method || "")
          .toLowerCase()
          .includes(keyword) ||

        (expense.notes || "")
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [expenses, search]);

  const totalExpense = filteredExpenses.reduce(
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
                Expense Management
              </h1>

              <p className="mt-1 text-gray-500">
                Total Expense :
                <span className="ml-2 font-bold text-red-600">
                  ₹{totalExpense.toLocaleString()}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">

              <input
                type="text"
                placeholder="Search expense..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-72 rounded-lg border px-4 py-2"
              />

              <button
                onClick={() => {
                  setSelectedExpense(null);
                  setOpen(true);
                }}
                className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
              >
                + Add Expense
              </button>

            </div>

          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow">

            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-gray-100">

                  <tr>
                    <th className="px-6 py-4 text-left">Expense</th>
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
                      <td
                        colSpan={6}
                        className="py-10 text-center"
                      >
                        Loading...
                      </td>
                    </tr>

                  ) : filteredExpenses.length === 0 ? (

                    <tr>
                      <td
                        colSpan={6}
                        className="py-10 text-center text-gray-500"
                      >
                        No Expense Records Found
                      </td>
                    </tr>

                  ) : (

                    filteredExpenses.map((item) => (
                      <tr
                        key={item.id}
                        className="border-t hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          {item.expense_name}
                        </td>

                        <td className="px-6 py-4 font-semibold text-red-600">
                          ₹{Number(item.amount).toLocaleString()}
                        </td>

                        <td className="px-6 py-4">
                          {item.expense_date || "-"}
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
                                setSelectedExpense(item);
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
                    <ExpenseModal
            open={open}
            expense={selectedExpense}
            onClose={() => {
              setOpen(false);
              setSelectedExpense(null);
              loadExpenses();
            }}
          />

        </main>
      </div>
    </div>
  );
}