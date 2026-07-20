"use client";

import { useEffect, useState } from "react";
import {
  addIncome,
  updateIncome,
  Income,
} from "../lib/income";

type Props = {
  open: boolean;
  onClose: () => void;
  income?: Income | null;
};

export default function IncomeModal({
  open,
  onClose,
  income,
}: Props) {

  const [customerName, setCustomerName] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [paymentDate, setPaymentDate] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash");

  const [notes, setNotes] =
    useState("");

  useEffect(() => {

    if (income) {

      setCustomerName(
        income.customer_name ?? ""
      );

      setAmount(
        String(income.amount ?? "")
      );

      setPaymentDate(
        income.payment_date ?? ""
      );

      setPaymentMethod(
        income.payment_method ?? "Cash"
      );

      setNotes(
        income.notes ?? ""
      );

    } else {

      setCustomerName("");

      setAmount("");

      setPaymentDate(
        new Date()
          .toISOString()
          .split("T")[0]
      );

      setPaymentMethod("Cash");

      setNotes("");

    }

  }, [income, open]);

  if (!open) return null;

  async function handleSave() {

    if (
      !customerName ||
      !amount ||
      !paymentDate
    ) {
      alert(
        "Please fill all required fields."
      );
      return;
    }

    const payload: Income = {
            customer_name: customerName,

      amount: Number(amount),

      payment_date: paymentDate,

      payment_method: paymentMethod,

      notes,
    };

    let result;

    if (income?.id) {

      result = await updateIncome(
        income.id,
        payload
      );

    } else {

      result = await addIncome(
        payload
      );

    }

    if (result.error) {
      alert(result.error.message);
      return;
    }

    onClose();
  }

  return (

    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">

      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">

          {income
            ? "Edit Income"
            : "Add Income"}

        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Customer Name"
            className="w-full rounded-lg border p-3"
            value={customerName}
            onChange={(e) =>
              setCustomerName(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full rounded-lg border p-3"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
          />
                    <input
            type="date"
            className="w-full rounded-lg border p-3"
            value={paymentDate}
            onChange={(e) =>
              setPaymentDate(
                e.target.value
              )
            }
          />

          <select
            className="w-full rounded-lg border p-3"
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(
                e.target.value
              )
            }
          >
            <option value="Cash">
              Cash
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Bank Transfer">
              Bank Transfer
            </option>

            <option value="Cheque">
              Cheque
            </option>

          </select>

          <textarea
            rows={4}
            placeholder="Notes"
            className="w-full rounded-lg border p-3"
            value={notes}
            onChange={(e) =>
              setNotes(
                e.target.value
              )
            }
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg bg-gray-300 px-5 py-2 hover:bg-gray-400"
          >
            Cancel
          </button>
                    <button
            onClick={handleSave}
            className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
          >
            {income
              ? "Update Income"
              : "Save Income"}
          </button>

        </div>

      </div>

    </div>

  );
}