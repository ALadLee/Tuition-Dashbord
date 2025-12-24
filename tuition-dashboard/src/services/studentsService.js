import { supabase } from "../lib/supabaseClient";

export async function getStudents() {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .order("student_name", { ascending: true });

  if (error) throw error;
  return data;
}

export async function addStudent(student) {
  const { data, error } = await supabase
    .from("students")
    .insert(student)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteStudent(id) {
  const { error } = await supabase.from("students").delete().eq("id", id);
  if (error) throw error;
}
