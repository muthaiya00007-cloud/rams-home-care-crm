"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import CustomerModal from "@/components/admin/CustomerModal";
import {
  getCustomers,
  deleteCustomer,
  Customer,
} from "@/components/lib/customers";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const loadCustomers = async () => {
    setLoading(true);

    const { data, error } = await getCustomers();

    if (error) {
      console.error(error);
      setCustomers([]);
    } else {
      setCustomers(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleDelete = async (id: number) => {
    const ok = confirm("Delete this customer?");

    if (!ok) return;

    const { error } = await deleteCustomer(id);

    if (error) {
      alert(error.message);
      return;
    }

    loadCustomers();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">
              Customers
            </h1>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              + Add Customer
            </button>
          </div>

          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-6 py-4">
                    Name
                  </th>

                  <th className="text-left px-6 py-4">
                    Phone
                  </th>

                  <th className="text-left px-6 py-4">
                    Address
                  </th>

                  <th className="text-left px-6 py-4">
                    Staff
                  </th>

                  <th className="text-left px-6 py-4">
                    Renewal
                  </th>

                  <th className="text-center px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : customers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10"
                    >
                      No Customers Found
                    </td>
                  </tr>
                ) : (
                  customers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        {customer.customer_name}
                      </td>

                      <td className="px-6 py-4">
                        {customer.phone}
                      </td>

                      <td className="px-6 py-4">
                        {customer.address}
                      </td>

                      <td className="px-6 py-4">
                        {customer.assigned_staff || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {customer.renewal_date || "-"}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            handleDelete(customer.id!)
                          }
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
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

          <CustomerModal
            open={open}
            onClose={() => {
              setOpen(false);
              loadCustomers();
            }}
          />
        </main>
      </div>
    </div>
  );
}