"use client";

import { useState } from "react";
import { addCustomer } from "../lib/customers";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CustomerModal({ open, onClose }: Props) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  if (!open) return null;

  async function handleSave() {
    if (!customerName || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await addCustomer({
      customer_name: customerName,
      phone,
      address,
      aadhaar: "",
      age: 0,
      assigned_staff: "",
      start_date: null,
    renewal_date: null,
      monthly_payment: 0,
      notes: "",
    });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Customer saved successfully!");

    setCustomerName("");
    setPhone("");
    setAddress("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-6">
          Add Customer
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="w-full border rounded-lg p-3"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}