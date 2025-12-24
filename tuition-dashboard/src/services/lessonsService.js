import { supabase } from "../lib/supabaseClient";

export async function getLessons() {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .order("starts_at", { ascending: true });

  if (error) throw error;
  return data;
}

export async function addLesson(lesson) {
  const { data, error } = await supabase
    .from("lessons")
    .insert(lesson)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateLesson(id, updates) {
  const { data, error } = await supabase
    .from("lessons")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteLesson(id) {
  const { error } = await supabase.from("lessons").delete().eq("id", id);
  if (error) throw error;
}
