import { supabase } from "./supabase";

export interface Customer {
  id?: number;

  customer_name: string;
  phone: string;
  alternate_phone: string;

  aadhaar: string;
  age: number;

  address: string;

  service_type: string;
  assigned_staff: string;

  joining_date: string | null;
  start_date: string | null;
  renewal_date: string | null;

  monthly_payment: number;

  status: string;
  notes: string;

  created_at?: string;
}

export async function getCustomers() {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("id", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function addCustomer(customer: Customer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([customer])
    .select();

  if (error) throw error;

  return data ?? [];
}

export async function updateCustomer(
  id: number,
  customer: Customer
) {
  const { data, error } = await supabase
    .from("customers")
    .update(customer)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data ?? [];
}

export async function deleteCustomer(id: number) {
  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

export async function getCustomer(id: number) {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}