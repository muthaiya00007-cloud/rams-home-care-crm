import { supabase } from "./supabase";

export type Income = {
  id?: number;
  customer_name: string;
  amount: number;
  payment_date: string;
  payment_method: string;
  notes: string;
};

export async function getIncome() {
  const { data, error } = await supabase
    .from("income")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function addIncome(income: Income) {
  const { data, error } = await supabase
    .from("income")
    .insert([income])
    .select();

  if (error) throw error;

  return data ?? [];
}

export async function updateIncome(
  id: number,
  income: Income
) {
  const { data, error } = await supabase
    .from("income")
    .update(income)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data ?? [];
}

export async function deleteIncome(id: number) {
  const { error } = await supabase
    .from("income")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}