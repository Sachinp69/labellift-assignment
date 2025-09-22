"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UploadTrack() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", artist: "", releaseDate: "", genre: "" });

  useEffect(() => {
    if(!localStorage.getItem("user")) router.push("/");
  }, [router]);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/tracks", { method: "POST", body: JSON.stringify(form) });
    router.push("/dashboard");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4 font-bold">Upload Track</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="title" placeholder="Track Title" value={form.title} onChange={handleChange} className="border p-2 rounded" />
        <input name="artist" placeholder="Artist Name" value={form.artist} onChange={handleChange} className="border p-2 rounded" />
        <input name="releaseDate" type="date" value={form.releaseDate} onChange={handleChange} className="border p-2 rounded" />
        <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Upload</button>
      </form>
    </div>
  );
}
