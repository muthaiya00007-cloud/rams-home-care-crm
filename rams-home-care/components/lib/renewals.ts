import { supabase } from "./supabase";

export type Renewal = {
  id: number;
  customer_id: number;
  customer_name: string;
  phone: string;
  start_date: string;
  renewal_date: string;
  status: string;
  created_at?: string;
};

export async function getRenewals() {
  const { data, error } = await supabase
    .from("renewals")
    .select("*")
    .order("renewal_date", { ascending: true });

  if (error) throw error;
  return data as Renewal[];
}

export async function addRenewal(
  renewal: Omit<Renewal, "id" | "created_at">
) {
  const { error } = await supabase
    .from("renewals")
    .insert([renewal]);

  if (error) throw error;
}

export async function updateRenewal(
  id: number,
  renewal: Partial<Renewal>
) {
  const { error } = await supabase
    .from("renewals")
    .update(renewal)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteRenewal(id: number) {
  const { error } = await supabase
    .from("renewals")
    .delete()
    .eq("id", id);

  if (error) throw error;
}