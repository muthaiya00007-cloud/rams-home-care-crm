"use client";

import { useState } from "react";
import { addRenewal } from "../lib/renewals";

type Props = {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
};

export default function RenewalModal({
  open,
  onClose,
  onSaved,
}: Props) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [renewalDate, setRenewalDate] = useState("");

  if (!open) return null;

  async function handleSave() {
    if (!customerName || !renewalDate) {
      alert("Customer Name and Renewal Date are required.");
      return;
    }

    await addRenewal({
      customer_id: 0,
      customer_name: customerName,
      phone,
      start_date: startDate,
      renewal_date: renewalDate,
      status: "Active",
    });

    setCustomerName("");
    setPhone("");
    setStartDate("");
    setRenewalDate("");

    onSaved();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Add Renewal
        </h2>

        <div className="space-y-4">

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div>
            <label className="mb-1 block text-sm">
              Start Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border p-3"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm">
              Renewal Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border p-3"
              value={renewalDate}
              onChange={(e) => setRenewalDate(e.target.value)}
            />
          </div>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg bg-gray-200 px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Save
          </button>

        </div>
      </div>
    </div>"use client";

import { useEffect, useMemo, useState } from "react";
import { addRenewal } from "@/components/lib/renewals";
import { Customer, getCustomers } from "@/components/lib/customers";

type Props = {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
};

export default function RenewalModal({
  open,
  onClose,
  onSaved,
}: Props) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;

    loadCustomers();

    setSelectedId("");
    setCustomerName("");
    setPhone("");
    setStartDate("");
    setRenewalDate("");
  }, [open]);

  async function loadCustomers() {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (err) {
      console.error(err);
    }
  }

  const selectedCustomer = useMemo(() => {
    return customers.find(
      (c) => String(c.id) === selectedId
    );
  }, [customers, selectedId]);

  useEffect(() => {
    if (!selectedCustomer) return;

    setCustomerName(selectedCustomer.customer_name);
    setPhone(selectedCustomer.phone);
    setStartDate(selectedCustomer.start_date || "");
    setRenewalDate(selectedCustomer.renewal_date || "");
  }, [selectedCustomer]);

  async function handleSave() {
    if (!customerName.trim()) {
      alert("Customer Name is required.");
      return;
    }

    if (!renewalDate) {
      alert("Renewal Date is required.");
      return;
    }

    try {
      setSaving(true);
  );
}
      await addRenewal({
        customer_id: selectedCustomer?.id ?? 0,
        customer_name: customerName,
        phone,
        start_date: startDate,
        renewal_date: renewalDate,
        status: "Active",
      });

      onSaved();
      onClose();

      setSelectedId("");
      setCustomerName("");
      setPhone("");
      setStartDate("");
      setRenewalDate("");

    } catch (error) {
      console.error(error);
      alert("Unable to save renewal.");
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">

      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Add Renewal Reminder
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <select
            className="rounded-lg border p-3"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">
              Select Customer
            </option>

            {customers.map((customer) => (
              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.customer_name}
              </option>
            ))}
          </select>

          <input
            className="rounded-lg border p-3"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) =>
              setCustomerName(e.target.value)
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />          <div>
            <label className="mb-2 block text-sm font-medium">
              Start Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border p-3"
              value={startDate}
              onChange={(e) =>
                setStartDate(e.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Renewal Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border p-3"
              value={renewalDate}
              onChange={(e) =>
                setRenewalDate(e.target.value)
              }
            />
          </div>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-300 px-6 py-3 font-medium hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Renewal"}
          </button>

        </div>

      </div>

    </div>
  );
}