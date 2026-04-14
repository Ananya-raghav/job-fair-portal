import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    { to: "/dashboard/profile", label: "👤 Profile" },
    { to: "/dashboard/register", label: "📝 Registration" },
    { to: "/dashboard/about", label: "ℹ️ About Us" },
    { to: "/dashboard/contact", label: "📞 Contact" },
  ];

  return (
    <div className="h-screen w-64 bg-slate-950 text-slate-100 p-6 fixed shadow-xl shadow-slate-900/20">
      <h1 className="text-2xl font-bold mb-10">Job Portal</h1>

      <nav className="space-y-4 text-sm font-medium">
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-slate-800 text-white shadow shadow-slate-900/40"
                  : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;