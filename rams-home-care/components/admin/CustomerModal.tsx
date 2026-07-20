"use client";

import { useEffect, useState } from "react";

import {
  Customer,
  addCustomer,
  updateCustomer,
} from "@/components/lib/customers";

import {
  Staff,
  getStaff,
} from "@/components/lib/staff";

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  editCustomer?: Customer | null;
}

const emptyCustomer: Customer = {
  customer_name: "",
  phone: "",
  alternate_phone: "",
  aadhaar: "",
  age: 0,
  address: "",
  service_type: "",
  assigned_staff: "",
  joining_date: "",
  start_date: "",
  renewal_date: "",
  monthly_payment: 0,
  status: "Active",
  notes: "",
};

export default function CustomerModal({
  open,
  onClose,
  onSaved,
  editCustomer,
}: Props) {
  const [customer, setCustomer] =
    useState<Customer>(emptyCustomer);

  const [staff, setStaff] =
    useState<Staff[]>([]);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (!open) return;

    loadStaff();

    if (editCustomer) {
      setCustomer(editCustomer);
    } else {
      setCustomer(emptyCustomer);
    }
  }, [open, editCustomer]);

  async function loadStaff() {
    try {
      const staffData = await getStaff();
      setStaff(staffData);
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(
    field: keyof Customer,
    value: any
  ) {
    setCustomer((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    try {
      setSaving(true);

      if (!customer.customer_name.trim()) {
        alert("Customer Name is required");
        return;
      }

      if (!customer.phone.trim()) {
        alert("Phone Number is required");
        return;
      }

      if (editCustomer?.id) {
        await updateCustomer(
          editCustomer.id,
          customer
        );
      } else {
        await addCustomer(customer);
      }

      onSaved();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Unable to save customer.");
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">

      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            {editCustomer
              ? "Edit Customer"
              : "Add Customer"}
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-5">
                    <input
            className="rounded-lg border p-3"
            placeholder="Customer Name"
            value={customer.customer_name}
            onChange={(e) =>
              handleChange("customer_name", e.target.value)
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder="Phone Number"
            value={customer.phone}
            onChange={(e) =>
              handleChange("phone", e.target.value)
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder="Alternate Phone Number"
            value={customer.alternate_phone}
            onChange={(e) =>
              handleChange("alternate_phone", e.target.value)
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder="Aadhaar Number"
            value={customer.aadhaar}
            onChange={(e) =>
              handleChange("aadhaar", e.target.value)
            }
          />

          <input
            type="number"
            className="rounded-lg border p-3"
            placeholder="Age"
            value={customer.age}
            onChange={(e) =>
              handleChange("age", Number(e.target.value))
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder="Address"
            value={customer.address}
            onChange={(e) =>
              handleChange("address", e.target.value)
            }
          />

          <select
            className="rounded-lg border p-3"
            value={customer.service_type}
            onChange={(e) =>
              handleChange("service_type", e.target.value)
            }
          >
            <option value="">Select Service</option>
            <option value="Patient Care">Patient Care</option>
            <option value="Elder Care">Elder Care</option>
            <option value="Baby Care">Baby Care</option>
            <option value="Nursing">Nursing</option>
            <option value="House Keeping">House Keeping</option>
            <option value="Cooking">Cooking</option>
          </select>

          <select
            className="rounded-lg border p-3"
            value={customer.assigned_staff}
            onChange={(e) =>
              handleChange("assigned_staff", e.target.value)
            }
          >
            <option value="">Select Staff</option>

            {staff.map((item) => (
              <option
                key={item.id}
                value={item.staff_name}
              >
                {item.staff_name}
              </option>
            ))}
          </select>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Joining Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border p-3"
              value={customer.joining_date || ""}
              onChange={(e) =>
                handleChange("joining_date", e.target.value)
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
              value={customer.renewal_date || ""}
              onChange={(e) =>
                handleChange("renewal_date", e.target.value)
              }
            />
          </div>
                    <input
            type="number"
            className="rounded-lg border p-3"
            placeholder="Monthly Payment"
            value={customer.monthly_payment}
            onChange={(e) =>
              handleChange(
                "monthly_payment",
                Number(e.target.value)
              )
            }
          />

          <select
            className="rounded-lg border p-3"
            value={customer.status}
            onChange={(e) =>
              handleChange("status", e.target.value)
            }
          >
            <option value="Active">Active</option>
            <option value="Due Soon">Due Soon</option>
            <option value="Expired">Expired</option>
          </select>

          <textarea
            className="col-span-2 rounded-lg border p-3"
            rows={4}
            placeholder="Notes"
            value={customer.notes}
            onChange={(e) =>
              handleChange("notes", e.target.value)
            }
          />

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
            onClick={handleSubmit}
            disabled={saving}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : editCustomer
              ? "Update Customer"
              : "Save Customer"}
          </button>

        </div>

      </div>

    </div>
  );
}