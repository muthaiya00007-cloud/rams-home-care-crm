"use client";

import type { Customer } from "@/components/lib/customers";

type Props = {
  customers: Customer[];
  onView: (customer: Customer) => void;
  onEdit: (customer: Customer) => void;
  onDelete: (id: number) => void;
};

export default function CustomerTable({
  customers,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Staff</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-500">
                No customers found.
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="p-3">{customer.customer_name}</td>

                <td className="p-3">{customer.phone}</td>

                <td className="p-3">{customer.assigned_staff}</td>

                <td className="p-3">{customer.status}</td>

                <td className="p-3 text-right space-x-2">
                  <button
                    onClick={() => onView(customer)}
                    className="rounded bg-blue-500 px-3 py-1 text-white"
                  >
                    View
                  </button>

                  <button
                    onClick={() => onEdit(customer)}
                    className="rounded bg-yellow-500 px-3 py-1 text-white"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      if (customer.id !== undefined) {
                        onDelete(customer.id);
                      }
                    }}
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}