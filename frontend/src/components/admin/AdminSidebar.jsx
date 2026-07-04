import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  FolderTree,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    name: "Products",
    icon: Package,
    path: "/admin-products",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/admin-orders",
  },
  {
    name: "Categories",
    icon: FolderTree,
    path: "/admin-categories",
  },
  {
    name: "Customers",
    icon: Users,
    path: "/admin-customers",
  },
  {
    name: "Reports",
    icon: BarChart3,
    path: "/admin-reports",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/admin-settings",
  },
];

function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800">

      <div className="p-6 border-b border-zinc-800">

        <h1 className="text-2xl font-bold text-yellow-500">
          Abrish
        </h1>

        <p className="text-sm text-gray-500">
          Admin Panel
        </p>

      </div>

      <nav className="p-4 space-y-2">

        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.name}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:bg-zinc-800"
                }`
              }
            >
              <Icon size={20} />
              {menu.name}
            </NavLink>
          );
        })}

      </nav>

      <div className="absolute bottom-5 w-64 px-4">

        <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 rounded-xl py-3">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;