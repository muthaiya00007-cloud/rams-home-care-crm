"use client";

import { useEffect, useState } from "react";
import { Staff } from "@/components/lib/staff";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (staff: Staff) => Promise<void>;
  initialData?: Staff | null;
};

const emptyStaff: Staff = {
  staff_name: "",
  phone: "",
  aadhaar: "",
  age: 0,
  address: "",
  qualification: "",
  experience: "",
  salary: 0,
  joining_date: "",
  status: "Active",
  notes: "",
};

export default function StaffModal({
  open,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [form, setForm] = useState<Staff>(emptyStaff);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(emptyStaff);
    }
  }, [initialData, open]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "age" || name === "salary"
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
        className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl"
      >
        <h2 className="mb-6 text-2xl font-bold">
          {initialData ? "Edit Staff" : "Add Staff"}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <input
            type="text"
            name="staff_name"
            placeholder="Staff Name"
            value={form.staff_name}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
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
            name="qualification"
            placeholder="Qualification"
            value={form.qualification}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={form.experience}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="date"
            name="joining_date"
            value={form.joining_date}
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
            {initialData ? "Update Staff" : "Save Staff"}
          </button>

        </div>

      </form>
    </div>
  );
}