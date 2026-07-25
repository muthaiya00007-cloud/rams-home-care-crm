"use client";

import { useEffect, useState } from "react";
import { Customer } from "@/components/lib/customers";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (customer: Customer) => Promise<void>;
  initialData?: Customer | null;
};

const emptyCustomer: Customer = {
  customer_name: "",
  phone: "",
  aadhaar: "",
  age: 0,
  address: "",
  assigned_staff: "",
  start_date: "",
  renewal_date: "",
  monthly_payment: 0,
  notes: "",
  status: "Active",
};

export default function CustomerModal({
  open,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [form, setForm] = useState<Customer>(emptyCustomer);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(emptyCustomer);
    }
  }, [initialData, open]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "age" || name === "monthly_payment"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSave(form);
  }

  if (!open) return null;
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-6 text-2xl font-bold">
          {initialData ? "Edit Customer" : "Add Customer"}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={form.customer_name}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={form.aadhaar}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="text"
            name="assigned_staff"
            placeholder="Assigned Staff"
            value={form.assigned_staff}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="monthly_payment"
            placeholder="Monthly Payment"
            value={form.monthly_payment}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="date"
            name="start_date"
            value={form.start_date}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="date"
            name="renewal_date"
            value={form.renewal_date}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="rounded-lg border p-3"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="mt-4 h-24 w-full rounded-lg border p-3"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          className="mt-4 h-24 w-full rounded-lg border p-3"
        />
                <div className="mt-6 flex justify-end gap-3">

          <button
            type="button"
            onClick={() => {
              onClose();
            }}
            className="rounded-lg border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
          >
            {initialData ? "Update Customer" : "Save Customer"}
          </button>

        </div>

      </form>
    </div>
  );
}