export default function LessonTable({
  rows,
  columns,
  onToggleBoolean,
  onDelete,
}) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-600">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="py-2 px-3">
                {c.label}
              </th>
            ))}
            <th />
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t">
              {columns.map((c) => (
                <td key={c.key} className="py-2 px-3">
                  {c.type === "boolean" ? (
                    <input
                      type="checkbox"
                      checked={!!row[c.key]}
                      onChange={(e) =>
                        onToggleBoolean(row.id, c.key, e.target.checked)
                      }
                    />
                  ) : c.format ? (
                    c.format(row[c.key])
                  ) : (
                    row[c.key] ?? "-"
                  )}
                </td>
              ))}
              <td className="py-2 px-3 text-right">
                <button
                  onClick={() => onDelete(row.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {rows.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="py-6 text-center text-gray-500"
              >
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
