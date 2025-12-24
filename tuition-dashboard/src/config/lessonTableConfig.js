export const lessonColumns = [
  {
    key: "student_name",
    label: "Student",
  },
  {
    key: "subject",
    label: "Subject",
  },
  {
    key: "starts_at",
    label: "Time",
    format: (v) => new Date(v).toLocaleString(),
  },
  {
    key: "paid",
    label: "Paid",
    type: "boolean",
  },
];
