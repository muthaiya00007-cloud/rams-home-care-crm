"use client";

import { Customer } from "@/components/lib/customers";

type Props = {
  open: boolean;
  customer: Customer | null;
  onClose: () => void;
  onEdit: (customer: Customer) => void;
};

export default function CustomerProfileModal({
  open,
  customer,
  onClose,
  onEdit,
}: Props) {
  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-5">

      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-3xl font-bold">
            👤 Customer Profile
          </h2>

          <button
            onClick={onClose}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <div className="grid grid-cols-2 gap-6 p-6">

          <div>

            <p className="text-gray-500">Customer Name</p>

            <h3 className="text-xl font-semibold">
              {customer.customer_name}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">Phone</p>

            <h3 className="text-xl font-semibold">
              {customer.phone}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Alternate Phone
            </p>

            <h3 className="text-lg">
              {customer.alternate_phone}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Aadhaar
            </p>

            <h3 className="text-lg">
              {customer.aadhaar}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Age
            </p>

            <h3 className="text-lg">
              {customer.age}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Address
            </p>

            <h3 className="text-lg">
              {customer.address}
            </h3>

          </div>
                    <div>

            <p className="text-gray-500">
              Service Type
            </p>

            <h3 className="text-lg font-medium">
              {customer.service_type || "-"}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Assigned Staff
            </p>

            <h3 className="text-lg font-medium">
              {customer.assigned_staff || "-"}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Joining Date
            </p>

            <h3 className="text-lg font-medium">
              {customer.joining_date || "-"}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Renewal Date
            </p>

            <h3 className="text-lg font-medium">
              {customer.renewal_date || "-"}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Monthly Payment
            </p>

            <h3 className="text-lg font-semibold text-green-600">
              ₹{Number(customer.monthly_payment).toLocaleString()}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Status
            </p>

            <span
              className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
                customer.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : customer.status === "Due Soon"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {customer.status}
            </span>

          </div>

        </div>

        <div className="border-t p-6">

          <p className="mb-2 text-gray-500">
            Notes
          </p>

          <div className="min-h-[100px] rounded-xl bg-gray-50 p-4">
            {customer.notes || "No notes available."}
          </div>

        </div>
                <div className="flex flex-wrap justify-end gap-3 border-t p-6">

          <button
            onClick={() =>
              window.open(`https://wa.me/91${customer.phone}`)
            }
            className="rounded-lg bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
          >
            📱 WhatsApp
          </button>

          <button
            onClick={() => onEdit(customer)}
            className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => window.print()}
            className="rounded-lg bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-700"
          >
            🖨️ Print
          </button>

          <button
            onClick={onClose}
            className="rounded-lg bg-gray-300 px-5 py-3 transition hover:bg-gray-400"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}