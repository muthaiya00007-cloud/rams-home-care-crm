"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Users,
} from "lucide-react";

import StaffModal from "@/components/admin/StaffModal";

import {
  getStaff,
  addStaff,
  updateStaff,
  deleteStaff,
} from "@/components/lib/staff";

type Staff = {
  id?: string;
  staff_name: string;
  phone: string;
  aadhaar: string;
  age: number;
  address: string;
  qualification: string;
  experience: string;
  salary: number;
  joining_date: string;
  status: string;
  notes: string;
};

export default function StaffPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [editingStaff, setEditingStaff] =
    useState<Staff | null>(null);

  async function loadStaff() {
    try {
      setLoading(true);

      const data = await getStaff();

      setStaff(data as Staff[]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStaff();
  }, []);

  async function handleSave(data: Staff) {
    try {
      if (editingStaff?.id) {
        await updateStaff(editingStaff.id, data);
      } else {
        await addStaff(data);
      }

      await loadStaff();

      setModalOpen(false);
      setEditingStaff(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id: string) {
    const ok = confirm(
      "Delete this staff member?"
    );

    if (!ok) return;

    try {
      await deleteStaff(id);

      await loadStaff();
    } catch (error) {
      console.error(error);
    }
  }

  const filteredStaff = useMemo(() => {
    const keyword = search.toLowerCase();

    return staff.filter((item) => {
      const name =
        (item.staff_name ?? "").toLowerCase();

      const qualification =
        (item.qualification ?? "").toLowerCase();

      const phone = item.phone ?? "";

      return (
        name.includes(keyword) ||
        qualification.includes(keyword) ||
        phone.includes(search)
      );
    });
  }, [staff, search]);
    return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <Users className="h-8 w-8 text-blue-700" />

          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              Staff Management
            </h1>

            <p className="text-gray-500">
              Manage all staff members
            </p>
          </div>

        </div>

        <button
          onClick={() => {
            setEditingStaff(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
        >
          <Plus size={18} />
          Add Staff
        </button>

      </div>

      <div className="relative">

        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search by Name, Phone or Qualification..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-blue-600"
        />

      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-blue-700 text-white">

              <tr>

                <th className="px-5 py-4 text-left">
                  Staff Name
                </th>

                <th className="px-5 py-4 text-left">
                  Phone
                </th>

                <th className="px-5 py-4 text-left">
                  Qualification
                </th>

                <th className="px-5 py-4 text-left">
                  Salary
                </th>

                <th className="px-5 py-4 text-left">
                  Status
                </th>

                <th className="px-5 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>
                            {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-gray-500"
                  >
                    Loading staff...
                  </td>
                </tr>
              ) : filteredStaff.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-gray-500"
                  >
                    No staff found.
                  </td>
                </tr>
              ) : (
                filteredStaff.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-5 py-4 font-medium">
                      {item.staff_name}
                    </td>

                    <td className="px-5 py-4">
                      {item.phone}
                    </td>

                    <td className="px-5 py-4">
                      {item.qualification}
                    </td>

                    <td className="px-5 py-4">
                      ₹{Number(item.salary).toLocaleString()}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Inactive"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() => {
                            setEditingStaff(item);
                            setModalOpen(true);
                          }}
                          className="rounded-lg bg-blue-100 p-2 text-blue-700 hover:bg-blue-200"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          onClick={() => {
                            if (item.id) {
                              handleDelete(item.id);
                            }
                          }}
                          className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200"
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
            <StaffModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingStaff(null);
        }}
        onSave={handleSave}
        initialData={editingStaff}
      />

    </div>
  );
}