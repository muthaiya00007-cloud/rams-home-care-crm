"use client";

import { useEffect, useState } from "react";
import {
  addExpense,
  updateExpense,
  Expense,
} from "../lib/expenses";

type Props = {
  open: boolean;
  onClose: () => void;
  expense?: Expense | null;
};

export default function ExpenseModal({
  open,
  onClose,
  expense,
}: Props) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (expense) {
      setExpenseName(expense.expense_name);
      setAmount(String(expense.amount));
      setExpenseDate(expense.expense_date || "");
      setPaymentMethod(expense.payment_method || "Cash");
      setNotes(expense.notes || "");
    } else {
      setExpenseName("");
      setAmount("");
      setExpenseDate(new Date().toISOString().split("T")[0]);
      setPaymentMethod("Cash");
      setNotes("");
    }
  }, [expense, open]);

  if (!open) return null;

  async function handleSave() {
    if (!expenseName || !amount || !expenseDate) {
      alert("Please fill all required fields.");
      return;
    }

    const payload: Expense = {
      expense_name: expenseName,
      amount: Number(amount),
      expense_date: expenseDate,
      payment_method: paymentMethod,
      notes,
    };

    let result;

    if (expense?.id) {
      result = await updateExpense(expense.id, payload);
    } else {
      result = await addExpense(payload);
    }

    if (result.error) {
      alert(result.error.message);
      return;
    }

    onClose();
  }
    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white w-full max-w-xl rounded-2xl p-6 shadow-xl">

        <h2 className="text-2xl font-bold mb-6">
          {expense ? "Edit Expense" : "Add Expense"}
        </h2>

        <div className="space-y-4">

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />

          <input
            type="number"
            className="w-full border rounded-lg p-3"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
          />

          <select
            className="w-full border rounded-lg p-3"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cheque</option>
          </select>

          <textarea
            className="w-full border rounded-lg p-3"
            placeholder="Notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

        </div>
                <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
          >
            {expense ? "Update Expense" : "Save Expense"}
          </button>

        </div>

      </div>
    </div>
  );
}