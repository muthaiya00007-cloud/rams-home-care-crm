"use client";

import { useState } from "react";
import { addStaff } from "../lib/staff";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function StaffModal({ open, onClose }: Props) {
  const [staffName, setStaffName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  if (!open) return null;

  async function handleSave() {
    if (!staffName || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await addStaff({
      staff_name: staffName,
      phone,
      address,
      aadhaar: "",
      age: 0,
      qualification: "",
      experience: "",
      salary: 0,
      joining_date: null,
      status: "Active",
      notes: "",
    });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Staff added successfully!");

    setStaffName("");
    setPhone("");
    setAddress("");

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Add Staff</h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-lg p-3"
            placeholder="Staff Name"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
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