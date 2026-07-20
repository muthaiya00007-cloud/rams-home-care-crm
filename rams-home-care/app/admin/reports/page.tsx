"use client";

import { useEffect, useState } from "react";

import { getCustomers } from "@/components/lib/customers";
import { getStaff } from "@/components/lib/staff";
import { getIncome } from "@/components/lib/income";
import { getExpenses } from "@/components/lib/expenses";

export default function ReportsPage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [profit, setProfit] = useState(0);

  useEffect(() => {
    loadReports();
  }, []);

  async function loadReports() {
    try {
      const customers = await getCustomers();
      const staff = await getStaff();
      const incomes = await getIncome();
      const expenses = await getExpenses();

      setCustomerCount(customers.length);
      setStaffCount(staff.length);

      const totalIncome = incomes.reduce(
        (sum: number, item: any) => sum + Number(item.amount),
        0
      );

      const totalExpense = expenses.reduce(
        (sum: number, item: any) => sum + Number(item.amount),
        0
      );

      setIncome(totalIncome);
      setExpense(totalExpense);
      setProfit(totalIncome - totalExpense);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Reports
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
                <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">Customers</p>
          <h2 className="mt-2 text-4xl font-bold">
            {customerCount}
          </h2>
        </div>

        <div className="rounded-2xl bg-green-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">Staff</p>
          <h2 className="mt-2 text-4xl font-bold">
            {staffCount}
          </h2>
        </div>

        <div className="rounded-2xl bg-purple-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">Income</p>
          <h2 className="mt-2 text-3xl font-bold">
            ₹{income.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-red-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">Expense</p>
          <h2 className="mt-2 text-3xl font-bold">
            ₹{expense.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-indigo-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">Profit</p>
          <h2 className="mt-2 text-3xl font-bold">
            ₹{profit.toLocaleString()}
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-bold">
            📋 Summary
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between border-b pb-2">
              <span>Total Customers</span>
              <strong>{customerCount}</strong>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Total Staff</span>
              <strong>{staffCount}</strong>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Total Income</span>
              <strong>₹{income.toLocaleString()}</strong>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Total Expense</span>
              <strong>₹{expense.toLocaleString()}</strong>
            </div>

            <div className="flex justify-between">
              <span>Net Profit</span>
              <strong className="text-green-600">
                ₹{profit.toLocaleString()}
              </strong>
            </div>

          </div>

        </div>
                <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-bold">
            📤 Export Reports
          </h2>

          <p className="mb-6 text-gray-500">
            Download or print your CRM reports.
          </p>

          <div className="grid grid-cols-1 gap-4">

            <button
              onClick={() => window.print()}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              🖨 Print Report
            </button>

            <button
              onClick={() => alert("PDF Export - Coming Soon")}
              className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
            >
              📄 Export PDF
            </button>

            <button
              onClick={() => alert("Excel Export - Coming Soon")}
              className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
            >
              📊 Export Excel
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}