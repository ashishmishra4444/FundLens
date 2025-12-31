import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-10">
      <h1 className="text-3xl font-bold">
        Welcome, {user?.name}
      </h1>

      <button
        onClick={logout}
        className="mt-6 px-6 py-2 bg-teal-500 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
