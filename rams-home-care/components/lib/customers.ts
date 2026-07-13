import { supabase } from "./supabase";

export type Customer = {
  id?: number;
  customer_name: string;
  phone: string;
  aadhaar: string;
  age: number;
  address: string;
  assigned_staff: string;
  start_date: string | null;
  renewal_date: string | null;
  monthly_payment: number;
  notes: string;
};
export async function getCustomers() {
  return await supabase
    .from("customers")
    .select("*")
    .order("id", { ascending: false });
}

export async function addCustomer(customer: Customer) {
  return await supabase
    .from("customers")
    .insert([customer]);
}

export async function updateCustomer(
  id: number,
  customer: Customer
) {
  return await supabase
    .from("customers")
    .update(customer)
    .eq("id", id);
}

export async function deleteCustomer(id: number) {
  return await supabase
    .from("customers")
    .delete()
    .eq("id", id);
}