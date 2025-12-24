import { useState } from "react";

export default function LessonForm({ onCreate }) {
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [startsAt, setStartsAt] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!studentName || !startsAt) return;

    onCreate({
      student_name: studentName,
      subject,
      starts_at: new Date(startsAt).toISOString(),
      paid: false,
    });

    setStudentName("");
    setSubject("");
    setStartsAt("");
  }

  return (
    <form onSubmit={submit} className="bg-white border rounded-xl p-4 space-y-3">
      <h2 className="text-lg font-semibold">Add lesson</h2>

      <input
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Student name"
        className="w-full"
      />

      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject (optional)"
        className="w-full"
      />

      <input
        type="datetime-local"
        value={startsAt}
        onChange={(e) => setStartsAt(e.target.value)}
        className="w-full"
      />

      <button className="bg-black text-white px-4 py-2 rounded-md">
        Add
      </button>
    </form>
  );
}
