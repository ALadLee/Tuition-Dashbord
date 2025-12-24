import { useEffect, useState } from "react";
import * as api from "../services/lessonsService";

export function useLessons() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function refresh() {
    setLoading(true);
    setError("");
    try {
      const data = await api.getLessons();
      setLessons(data);
    } catch (e) {
      setError(e.message || "Failed to load lessons");
    } finally {
      setLoading(false);
    }
  }

  async function createLesson(lesson) {
    const created = await api.addLesson(lesson);
    setLessons((prev) => [...prev, created]);
  }

  async function togglePaid(id, paid) {
    const updated = await api.updateLesson(id, { paid });
    setLessons((prev) =>
      prev.map((l) => (l.id === id ? updated : l))
    );
  }

  async function removeLesson(id) {
    await api.deleteLesson(id);
    setLessons((prev) => prev.filter((l) => l.id !== id));
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    lessons,
    loading,
    error,
    refresh,
    createLesson,
    togglePaid,
    removeLesson,
  };
}
