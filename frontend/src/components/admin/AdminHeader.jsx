import { Bell, Search, UserCircle } from "lucide-react";

function AdminHeader() {
  return (
    <header className="h-20 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome to Abrish Collection Admin
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:border-yellow-500"
          />
        </div>

        <Bell
          size={22}
          className="text-gray-300 cursor-pointer hover:text-yellow-500"
        />

        <UserCircle
          size={34}
          className="text-yellow-500 cursor-pointer"
        />

      </div>

    </header>
  );
}

export default AdminHeader;