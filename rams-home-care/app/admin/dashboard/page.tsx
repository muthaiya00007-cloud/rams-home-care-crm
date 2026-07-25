"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

import { Users, UserCog, IndianRupee, Wallet, Bell, AlertTriangle } from "lucide-react";

import { getCustomers } from "@/components/lib/customers";
import { getStaff } from "@/components/lib/staff";
import { getIncome } from "@/components/lib/income";
import { getExpenses } from "@/components/lib/expenses";

export default function DashboardPage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [renewalDue, setRenewalDue] = useState(0);
  const [expired, setExpired] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const customers = await getCustomers();
      const staff = await getStaff();
      const incomes = await getIncome();
      const expenses = await getExpenses();

      setCustomerCount(customers.length);
      setStaffCount(staff.length);

      const totalIncome = incomes.reduce(
        (sum, item) => sum + Number(item.amount || 0),
        0
      );

      const totalExpense = expenses.reduce(
        (sum, item) => sum + Number(item.amount || 0),
        0
      );

      setIncome(totalIncome);
      setExpense(totalExpense);

      const today = new Date();

      let due = 0;
      let expiredCount = 0;

      customers.forEach((customer) => {
        if (!customer.renewal_date) return;

        const renewal = new Date(customer.renewal_date);

        const diff = Math.ceil(
          (renewal.getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        if (diff < 0) {
          expiredCount++;
        } else if (diff <= 7) {
          due++;
        }
      });

      setRenewalDue(due);
      setExpired(expiredCount);
    } catch (err) {
      console.error(err);
    }
  }

  const cards = [
    {
      title: "Customers",
      value: customerCount,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Staff",
      value: staffCount,
      icon: UserCog,
      color: "text-green-600",
    },
    {
      title: "Income",
      value: `₹ ${income.toLocaleString()}`,
      icon: IndianRupee,
      color: "text-emerald-600",
    },
    {
      title: "Expenses",
      value: `₹ ${expense.toLocaleString()}`,
      icon: Wallet,
      color: "text-red-600",
    },
    {
      title: "Renewals Due",
      value: renewalDue,
      icon: Bell,
      color: "text-orange-500",
    },
    {
      title: "Expired",
      value: expired,
      icon: AlertTriangle,
      color: "text-red-700",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="p-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500">
                        {card.title}
                      </p>

                      <h2 className="mt-3 text-3xl font-bold">
                        {card.value}
                      </h2>
                    </div>

                    <Icon
                      className={card.color}
                      size={42}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-white p-8 shadow-md">
            <h2 className="mb-3 text-2xl font-bold">
              Profit Summary
            </h2>

            <h1 className="text-4xl font-bold text-green-600">
              ₹ {(income - expense).toLocaleString()}
            </h1>

            <p className="mt-3 text-gray-500">
              Total Income − Total Expenses
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}