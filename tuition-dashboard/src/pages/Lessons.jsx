import { useLessons } from "../hooks/useLessons";
import LessonForm from "../components/lessons/LessonForm";
import LessonTable from "../components/lessons/LessonTable";
import { lessonColumns } from "../config/lessonTableConfig";

export default function Lessons() {
  const {
    lessons,
    loading,
    error,
    createLesson,
    togglePaid,
    removeLesson,
  } = useLessons();

  return (
    <div className="space-y-4">
      <h1>Lessons</h1>

      {error && <div className="text-red-600">{error}</div>}
      {loading && <div>Loading…</div>}

      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <LessonForm onCreate={createLesson} />

        <LessonTable
          rows={lessons}
          columns={lessonColumns}
          onToggleBoolean={(id, key, value) =>
            togglePaid(id, value)
          }
          onDelete={removeLesson}
        />
      </div>
    </div>
  );
}
