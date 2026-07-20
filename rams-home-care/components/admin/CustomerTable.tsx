"use client";

import { Customer } from "@/components/lib/customers";

type Props = {
  customers: Customer[];
  onView: (customer: Customer) => void;
  onEdit: (customer: Customer) => void;
  onDelete: (id: number) => void;
};

function getStatus(date: string | null) {
  if (!date) {
    return {
      text: "No Date",
      color: "bg-gray-100 text-gray-700",
    };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const renewal = new Date(date);
  renewal.setHours(0, 0, 0, 0);

  const diff = Math.ceil(
    (renewal.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (diff < 0) {
    return {
      text: "Expired",
      color: "bg-red-100 text-red-700",
    };
  }

  if (diff <= 7) {
    return {
      text: "Due Soon",
      color: "bg-yellow-100 text-yellow-700",
    };
  }

  return {
    text: "Active",
    color: "bg-green-100 text-green-700",
  };
}

export default function CustomerTable({
  customers,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Staff</th>
            <th className="p-3 text-left">Renewal</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>
                      {customers.map((customer) => {
            const status = getStatus(customer.renewal_date);

            return (
              <tr
                key={customer.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3">
                  <div className="font-semibold">
                    {customer.customer_name}
                  </div>

                  <div className="text-xs text-gray-500">
                    {customer.service_type}
                  </div>
                </td>

                <td className="p-3">
                  {customer.phone}
                </td>

                <td className="p-3">
                  {customer.assigned_staff}
                </td>

                <td className="p-3">
                  {customer.renewal_date || "-"}
                </td>

                <td className="p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${status.color}`}
                  >
                    {status.text}
                  </span>
                </td>

                <td className="p-3">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => onView(customer)}
                      className="rounded-lg bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
                    >
                      👁 View
                    </button>

                    <button
                      onClick={() => onEdit(customer)}
                      className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/91${customer.phone}`,
                          "_blank"
                        )
                      }
                      className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                    >
                      📱 WhatsApp
                    </button>

                    <button
                      onClick={() => {
                        if (confirm("Delete this customer?")) {
                          onDelete(customer.id!);
                        }
                      }}
                      className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </td>

              </tr>
            );
          })}
                  </tbody>

      </table>

      {customers.length === 0 && (
        <div className="p-10 text-center text-gray-500">
          No customers found.
        </div>
      )}

    </div>
  );
}