"use client";

import { useEffect, useMemo, useState } from "react";

import CustomerModal from "@/components/admin/CustomerModal";
import CustomerTable from "@/components/admin/CustomerTable";

import {
  Customer,
  getCustomers,
  deleteCustomer,
} from "@/components/lib/customers";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [editCustomer, setEditCustomer] =
    useState<Customer | null>(null);

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  async function loadCustomers() {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  async function handleDelete(id: number) {
    try {
      await deleteCustomer(id);
      loadCustomers();
    } catch (error) {
      console.error(error);
      alert("Unable to delete customer.");
    }
  }

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {

      return (
        customer.customer_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        customer.phone
          .includes(search) ||

        customer.assigned_staff
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    });
  }, [customers, search]);

  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Customers
        </h1>

        <button
          onClick={() => {
            setEditCustomer(null);
            setOpen(true);
          }}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white"
        >
          + Add Customer
        </button>

      </div>

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Search customer..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
            <CustomerTable
        customers={filteredCustomers}
        onView={(customer) => {
          setSelectedCustomer(customer);
          setProfileOpen(true);
        }}
        onEdit={(customer) => {
          setEditCustomer(customer);
          setOpen(true);
        }}
        onDelete={handleDelete}
      />

      <CustomerModal
        open={open}
        editCustomer={editCustomer}
        onClose={() => {
          setOpen(false);
          setEditCustomer(null);
        }}
        onSaved={() => {
          setOpen(false);
          setEditCustomer(null);
          loadCustomers();
        }}
      />

      
          </div>
  );
}