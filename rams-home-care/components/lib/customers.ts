import { supabase } from "./supabase";

export type Customer = {
  id?: number;
  customer_name: string;
  phone: string;
  aadhaar: string;
  age: number;
  address: string;
  assigned_staff: string;
  start_date: string;
  renewal_date: string;
  monthly_payment: number;
  notes: string;
  status: string;
};

export async function getCustomers() {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}
export async function addCustomer(customer: Customer) {
  const { error } = await supabase
    .from("customers")
    .insert([customer]);

  if (error) throw error;
}

export async function updateCustomer(
  id: number,
  customer: Customer
) {
  const { error } = await supabase
    .from("customers")
    .update(customer)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteCustomer(id: number) {
  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("id", id);

  if (error) throw error;
}