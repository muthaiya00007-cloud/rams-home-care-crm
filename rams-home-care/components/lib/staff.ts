import { supabase } from "./supabase";

export type Staff = {
  id?: number;
  staff_name: string;
  phone: string;
  aadhaar: string;
  age: number;
  address: string;
  qualification: string;
  experience: string;
  salary: number;
  joining_date: string | null;
  status: string;
  notes: string;
};

export async function getStaff() {
  return await supabase
    .from("staff")
    .select("*")
    .order("id", { ascending: false });
}

export async function addStaff(staff: Staff) {
  return await supabase
    .from("staff")
    .insert([staff]);
}

export async function updateStaff(
  id: number,
  staff: Staff
) {
  return await supabase
    .from("staff")
    .update(staff)
    .eq("id", id);
}

export async function deleteStaff(id: number) {
  return await supabase
    .from("staff")
    .delete()
    .eq("id", id);
}