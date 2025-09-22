"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  if(!localStorage.getItem("user")) window.location.href = "/";
  fetch("/api/tracks")
    .then(res => {
      if(!res.ok) throw new Error("Network response not ok");
      return res.json();
    })
    .then(setTracks)
    .catch(err => {
      console.error("Failed to fetch tracks:", err);
      setTracks([]); 
    });
}, []);

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(search.toLowerCase()) ||
    track.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <input
          type="text"
          placeholder="Search by title or artist"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded p-2 w-full sm:w-64"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Artist</th>
              <th className="border px-4 py-2">Release Date</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map(track => (
              <tr key={track.id} className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer" onClick={() => window.location.href = `/track/${track.id}`}>
                <td className="border px-4 py-2">{track.title}</td>
                <td className="border px-4 py-2">{track.artist}</td>
                <td className="border px-4 py-2">{track.releaseDate}</td>
                <td className="border px-4 py-2">{track.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/track/upload" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Upload New Track</Link>
    </div>
  );
}
