import { supabase } from "./supabase";

export type Staff = {
  id?: string;
  staff_name: string;
  phone: string;
  aadhaar: string;
  age: number;
  address: string;
  qualification: string;
  experience: string;
  salary: number;
  joining_date: string;
  status: string;
  notes: string;
};

export async function getStaff() {
  const { data, error } = await supabase
    .from("staff")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function addStaff(staff: Staff) {
  const { error } = await supabase
    .from("staff")
    .insert([staff]);

  if (error) throw error;
}

export async function updateStaff(id: string, staff: Staff) {
  const { error } = await supabase
    .from("staff")
    .update(staff)
    .eq("id", id);

  if (error) throw error;
}

export async function deleteStaff(id: string) {
  const { error } = await supabase
    .from("staff")
    .delete()
    .eq("id", id);

  if (error) throw error;
}