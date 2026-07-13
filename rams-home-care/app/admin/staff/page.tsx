"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import StaffModal from "@/components/admin/StaffModal";
import {
  getStaff,
  deleteStaff,
  Staff,
} from "@/components/lib/staff";

export default function StaffPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const loadStaff = async () => {
    setLoading(true);

    const { data, error } = await getStaff();

    if (error) {
      console.error(error);
      setStaff([]);
    } else {
      setStaff(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadStaff();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this staff?")) return;

    const { error } = await deleteStaff(id);

    if (error) {
      alert(error.message);
      return;
    }

    loadStaff();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Staff Management
            </h1>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              + Add Staff
            </button>
          </div>

          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Address</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8">
                      Loading...
                    </td>
                  </tr>
                ) : staff.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8">
                      No Staff Found
                    </td>
                  </tr>
                ) : (
                  staff.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-6 py-4">
                        {item.staff_name}
                      </td>

                      <td className="px-6 py-4">
                        {item.phone}
                      </td>

                      <td className="px-6 py-4">
                        {item.address}
                      </td>

                      <td className="px-6 py-4">
                        {item.status}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            handleDelete(item.id!)
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

          <StaffModal
            open={open}
            onClose={() => {
              setOpen(false);
              loadStaff();
            }}
          />
        </main>
      </div>
    </div>
  );
}