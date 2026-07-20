async function loadDashboard() {
  try {
    const customers = await getCustomers();
    const staff = await getStaff();
    const income = await getIncome();
    const expenses = await getExpenses();

    setCustomerCount(customers.length);
    setStaffCount(staff.length);

    const incomeTotal = income.reduce(
      (total, item) => total + Number(item.amount || 0),
      0
    );

    const expenseTotal = expenses.reduce(
      (total, item) => total + Number(item.amount || 0),
      0
    );

    setTotalIncome(incomeTotal);
    setTotalExpense(expenseTotal);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let due = 0;
    let expired = 0;

    customers.forEach((customer) => {
      if (!customer.renewal_date) return;

      const renewal = new Date(customer.renewal_date);
      renewal.setHours(0, 0, 0, 0);

      const diff = Math.ceil(
        (renewal.getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (diff < 0) {
        expired++;
      } else if (diff <= 7) {
        due++;
      }
    });

    setRenewalDue(due);
    setExpiredCustomers(expired);
  } catch (error) {
    console.error("Dashboard Load Error:", error);
  }
}