"use client";

import { useEffect, useMemo, useState } from "react";
import RenewalModal from "@/components/admin/RenewalModal";
import {
  getRenewals,
  deleteRenewal,
  Renewal,
} from "@/components/lib/renewals";

export default function RenewalsPage() {
  const [renewals, setRenewals] = useState<Renewal[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  async function loadData() {
    const data = await getRenewals();
    setRenewals(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const filtered = useMemo(() => {
    return renewals.filter(
      (r) =>
        r.customer_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        r.phone.includes(search)
    );
  }, [renewals, search]);

  function getStatus(date: string) {
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

  return (
    <div>

      <div className="mb-6 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Renewal Reminder
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          + Add Renewal
        </button>

      </div>

      <input
        className="mb-6 w-full rounded-lg border p-3"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-hidden rounded-xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Renewal Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((item) => {
              const status = getStatus(item.renewal_date);

              return (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-3">
                    {item.customer_name}
                  </td>

                  <td className="p-3">
                    {item.phone}
                  </td>

                  <td className="p-3">
                    {item.renewal_date}
                  </td>

                  <td className="p-3">
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${status.color}`}
                    >
                      {status.text}
                    </span>
                  </td>

                  <td className="p-3 text-center">

                    <button
                      onClick={async () => {
                        if (
                          confirm(
                            "Delete this renewal?"
                          )
                        ) {
                          await deleteRenewal(item.id);
                          loadData();
                        }
                      }}
                      className="rounded bg-red-600 px-3 py-2 text-white"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      <RenewalModal
        open={open}
        onClose={() => setOpen(false)}
        onSaved={loadData}
      />

    </div>
  );
}