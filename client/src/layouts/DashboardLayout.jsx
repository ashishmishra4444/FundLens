import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6">
        <h2 className="text-xl font-bold text-teal-400 mb-10">FundLens</h2>

        <nav className="space-y-4 text-sm">
          <div className="cursor-pointer text-teal-400">Dashboard</div>
          <div className="cursor-pointer text-gray-400 hover:text-teal-400">
            SIP Planner
          </div>
          <div className="text-gray-500 cursor-not-allowed">
            Goals (Coming Soon)
          </div>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between">
          <p className="text-sm text-gray-300">
            Welcome, <span className="text-white">{user?.name}</span>
          </p>

          <button
            onClick={logout}
            className="text-sm text-teal-400 hover:underline"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
