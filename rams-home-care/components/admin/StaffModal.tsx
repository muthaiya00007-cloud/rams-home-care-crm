"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

import { getCustomers } from "@/components/lib/customers";
import { getStaff } from "@/components/lib/staff";
import { getIncome } from "@/components/lib/income";
import { getExpenses } from "@/components/lib/expenses";

export default function DashboardPage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const [profit, setProfit] = useState(0);

  const [expired, setExpired] = useState(0);
  const [dueSoon, setDueSoon] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const customers = await getCustomers();
      const staff = await getStaff();
      const income = await getIncome();
      const expenses = await getExpenses();

      setCustomerCount(customers.length);
      setStaffCount(staff.length);

      const incomeTotal = income.reduce(
        (sum: number, item: any) => sum + Number(item.amount),
        0
      );

      const expenseTotal = expenses.reduce(
        (sum: number, item: any) => sum + Number(item.amount),
        0
      );

      setTotalIncome(incomeTotal);
      setTotalExpense(expenseTotal);
      setProfit(incomeTotal - expenseTotal);

      let expiredCount = 0;
      let dueSoonCount = 0;
      let activeCount = 0;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      customers.forEach((customer) => {
        if (!customer.renewal_date) {
          activeCount++;
          return;
        }

        const renewal = new Date(customer.renewal_date);
        renewal.setHours(0, 0, 0, 0);

        const diff = Math.ceil(
          (renewal.getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        if (diff < 0) {
          expiredCount++;
        } else if (diff <= 7) {
          dueSoonCount++;
        } else {
          activeCount++;
        }
      });

      setExpired(expiredCount);
      setDueSoon(dueSoonCount);
      setActive(activeCount);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
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
          <p className="text-sm opacity-80">Total Income</p>
          <h2 className="mt-2 text-4xl font-bold">
            ₹{totalIncome.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-red-600 p-6 text-white shadow-lg">
          <p className="text-sm opacity-80">Total Expense</p>
          <h2 className="mt-2 text-4xl font-bold">
            ₹{totalExpense.toLocaleString()}
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">

        <div className="rounded-2xl border-l-4 border-red-500 bg-white p-5 shadow">
          <p className="text-gray-500">Expired</p>
          <h3 className="mt-2 text-3xl font-bold text-red-600">
            {expired}
          </h3>
        </div>

        <div className="rounded-2xl border-l-4 border-yellow-500 bg-white p-5 shadow">
          <p className="text-gray-500">Due in 7 Days</p>
          <h3 className="mt-2 text-3xl font-bold text-yellow-600">
            {dueSoon}
          </h3>
        </div>

        <div className="rounded-2xl border-l-4 border-green-500 bg-white p-5 shadow">
          <p className="text-gray-500">Active</p>
          <h3 className="mt-2 text-3xl font-bold text-green-600">
            {active}
          </h3>
        </div>

        <div className="rounded-2xl border-l-4 border-indigo-500 bg-white p-5 shadow">
          <p className="text-gray-500">Profit</p>
          <h3 className="mt-2 text-3xl font-bold text-indigo-600">
            ₹{profit.toLocaleString()}
          </h3>
        </div>

      </div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            📊 Monthly Analytics
          </h2>

          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-500">
            Charts Coming Soon...
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">
            🔔 Renewal Summary
          </h2>

          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-lg bg-red-50 p-4">
              <span>Expired Customers</span>
              <span className="font-bold text-red-600">
                {expired}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-4">
              <span>Due in 7 Days</span>
              <span className="font-bold text-yellow-600">
                {dueSoon}
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-green-50 p-4">
              <span>Active Customers</span>
              <span className="font-bold text-green-600">
                {active}
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}