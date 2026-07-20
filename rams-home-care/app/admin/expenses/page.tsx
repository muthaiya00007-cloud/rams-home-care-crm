"use client";

import { useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import ExpenseModal from "@/components/admin/ExpenseModal";
import {
  getExpenses,
  deleteExpense,
  Expense,
} from "@/components/lib/expenses";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] =
    useState<Expense | null>(null);
  const [search, setSearch] = useState("");

  async function loadExpenses() {
    setLoading(true);

    const { data, error } = await getExpenses();

    if (error) {
      console.error(error);
      setExpenses([]);
    } else {
      setExpenses(data ?? []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadExpenses();
  }, []);

  const filteredExpenses = useMemo(() => {
    const q = search.toLowerCase();

    return expenses.filter(
      (item) =>
        item.expense_name.toLowerCase().includes(q) ||
        (item.payment_method || "")
          .toLowerCase()
          .includes(q) ||
        (item.notes || "")
          .toLowerCase()
          .includes(q)
    );
  }, [expenses, search]);

  async function handleDelete(id: number) {
    if (!confirm("Delete this expense?")) return;

    const { error } = await deleteExpense(id);

    if (error) {
      alert(error.message);
      return;
    }

    loadExpenses();
  }

  const totalExpense = expenses.reduce(
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
                Expense Management
              </h1>

              <p className="text-gray-500 mt-1">
                Total Expense :
                <span className="font-bold text-red-600 ml-2">
                  ₹{totalExpense}
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
                  setSelectedExpense(null);
                  setOpen(true);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
              >
                + Add Expense
              </button>

            </div>

          </div>
                    <div className="bg-white rounded-xl shadow overflow-x-auto">

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
                    <td colSpan={6} className="text-center py-8">
                      Loading...
                    </td>
                  </tr>
                ) : filteredExpenses.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8">
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
                        ₹{item.amount}
                      </td>

                      <td className="px-6 py-4">
                        {item.expense_date}
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
                            setSelectedExpense(item);
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