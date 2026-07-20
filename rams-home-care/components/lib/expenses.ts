import { supabase } from "./supabase";

export type Expense = {
  id?: number;
  expense_name: string;
  amount: number;
  expense_date: string | null;
  payment_method: string;
  notes: string;
};

export async function getExpenses() {
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function addExpense(
  expense: Expense
) {
  const { data, error } = await supabase
    .from("expenses")
    .insert([expense])
    .select();

  if (error) throw error;

  return data ?? [];
}

export async function updateExpense(
  id: number,
  expense: Expense
) {
  const { data, error } = await supabase
    .from("expenses")
    .update(expense)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data ?? [];
}

export async function deleteExpense(
  id: number
) {
  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}