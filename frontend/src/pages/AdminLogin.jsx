import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      email === "admin@abrish.com" &&
      password === "123456"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-2xl w-[420px]">

        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-4 bg-black border border-zinc-700 rounded-lg p-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-6 bg-black border border-zinc-700 rounded-lg p-3 text-white"
        />

        <button
          onClick={login}
          className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;