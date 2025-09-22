"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("user")) router.push("/dashboard");
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password){ 
      localStorage.setItem("user", username);
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Login</h1>
        <input className="border p-2 w-full mb-3 rounded" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="border p-2 w-full mb-3 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
}
