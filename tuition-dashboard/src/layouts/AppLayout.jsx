import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      <aside className="bg-white border-r p-4">
        <Sidebar />
      </aside>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
