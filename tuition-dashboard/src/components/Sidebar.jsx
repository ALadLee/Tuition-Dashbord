import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const navBase =
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition";

function NavItem({ to, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navBase} bg-gray-100 text-gray-900`
            : `${navBase} text-gray-600 hover:bg-gray-100 hover:text-gray-900`
        }
      >
        <span>{label}</span>
      </NavLink>
    </li>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if you click outside
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Replace these later with real user data from Supabase
  const user = {
    name: "John Tutor",
  };

  return (
    <aside className="flex h-full flex-col bg-white">
      {/* Brand */}
      <div className="px-3 py-4">
        <div className="rounded-xl border bg-gray-50 px-3 py-3">
          <div className="text-sm font-semibold text-gray-900">Admin Dashboard</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="px-3">
        <ul className="space-y-1">
          <NavItem to="/dashboard" label="Dashboard" />
          <NavItem to="/lessons" label="Lessons" />
          <NavItem to="/students" label="Students" />
          <NavItem to="/payments" label="Payments" />
        </ul>
      </nav>

      {/* Bottom profile */}
      <div className="mt-auto px-3 py-4" ref={menuRef}>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border bg-white shadow-sm">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/settings"); // ✅ Settings works
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
            >
              <span>⚙️</span>
              <span>Settings</span>
            </button>

            <button
              onClick={() => {
                setOpen(false);
                alert("Logout clicked (wire Supabase later)");
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-gray-50"
            >
              <span>⎋</span>
              <span>Logout</span>
            </button>
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full rounded-xl border px-3 py-3 text-left hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
              {user.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>

            {/* Name + email */}
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-gray-900">
                {user.name}
              </div>
            </div>

            {/* Chevron */}
            <div className="text-gray-500 text-xs">▾</div>
          </div>
        </button>

        
      </div>
    </aside>
  );
}
