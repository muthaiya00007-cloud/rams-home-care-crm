"use client";

import { useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import CustomerModal from "@/components/admin/CustomerModal";

import {
  Customer,
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "@/components/lib/customers";

import {
  Plus,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [editingCustomer, setEditingCustomer] =
    useState<Customer | null>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    try {
      setLoading(true);

      const data = await getCustomers();

      setCustomers(data || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load customers.");
    } finally {
      setLoading(false);
    }
  }

  async function saveCustomer(customer: Customer) {
    try {
      if (customer.id) {
        await updateCustomer(customer.id, customer);
      } else {
        await addCustomer(customer);
      }

      setOpen(false);
      setEditingCustomer(null);

      await loadCustomers();
    } catch (error) {
      console.error(error);
      alert("Unable to save customer.");
    }
  }

   async function removeCustomer(id: number) {
  const ok = confirm(
    "Are you sure you want to delete this customer?"
  );

  if (!ok) return;

  try {
    await deleteCustomer(id);
    await loadCustomers();
  } catch (error) {
    console.error(error);
    alert("Delete failed.");
  }
}

  const filteredCustomers = useMemo(() => {
    const keyword = search.toLowerCase();

    return customers.filter((customer) => {
      return (
        customer.customer_name
          .toLowerCase()
          .includes(keyword) ||

        customer.phone.includes(search) ||

        customer.address
          .toLowerCase()
          .includes(keyword) ||

        customer.assigned_staff
          .toLowerCase()
          .includes(keyword)
      );
    });
  }, [customers, search]);
    return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="relative w-full md:w-96">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border bg-white py-3 pl-10 pr-4 shadow-sm outline-none focus:border-blue-700"
              />
            </div>

            <button
              onClick={() => {
                setEditingCustomer(null);
                setOpen(true);
              }}
              className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              <Plus size={20} />
              Add Customer
            </button>

          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-blue-700 text-white">

                  <tr>
                    <th className="px-5 py-4 text-left">Customer</th>
                    <th className="px-5 py-4 text-left">Phone</th>
                    <th className="px-5 py-4 text-left">Staff</th>
                    <th className="px-5 py-4 text-left">Renewal</th>
                    <th className="px-5 py-4 text-left">Status</th>
                    <th className="px-5 py-4 text-center">Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {loading ? (

                    <tr>
                      <td
                        colSpan={6}
                        className="py-10 text-center text-gray-500"
                      >
                        Loading customers...
                      </td>
                    </tr>

                  ) : filteredCustomers.length === 0 ? (

                    <tr>
                      <td
                        colSpan={6}
                        className="py-10 text-center text-gray-500"
                      >
                        No customers found.
                      </td>
                    </tr>

                  ) : (

                    filteredCustomers.map((customer) => (
                      <tr
                        key={customer.id}
                        className="border-b transition hover:bg-gray-50"
                      >
                        <td className="px-5 py-4 font-semibold">
                          {customer.customer_name}
                        </td>

                        <td className="px-5 py-4">
                          {customer.phone}
                        </td>

                        <td className="px-5 py-4">
                          {customer.assigned_staff || "-"}
                        </td>

                        <td className="px-5 py-4">
                          {customer.renewal_date || "-"}
                        </td>
                                                <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${
                              customer.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : customer.status === "Inactive"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex justify-center gap-3">

                            <button
                              onClick={() => {
                                setEditingCustomer(customer);
                                setOpen(true);
                              }}
                              className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
                            >
                              <Pencil size={18} />
                            </button>

                            <button
                              onClick={() => {
                                if (customer.id) {
                                  removeCustomer(customer.id);
                                }
                              }}
                              className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                            >
                              <Trash2 size={18} />
                            </button>

                          </div>
                        </td>

                      </tr>
                    ))

                  )}

                </tbody>

              </table>

            </div>

          </div>

          <div className="mt-4 text-sm text-gray-500">
            Total Customers: {filteredCustomers.length}
          </div>

          <CustomerModal
            open={open}
            onClose={() => {
              setOpen(false);
              setEditingCustomer(null);
            }}
            onSave={saveCustomer}
            initialData={editingCustomer}
          />
                  </main>
      </div>
    </div>
  );
}