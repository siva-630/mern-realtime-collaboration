import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);

  // 🔹 Fetch user profile
  useEffect(() => {
    API.get("/auth/profile")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {user ? (
          <>
            <p className="text-lg">Welcome 👋</p>
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Dashboard;