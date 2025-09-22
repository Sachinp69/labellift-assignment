"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function TrackDetails() {
  const params = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if(!localStorage.getItem("user")) window.location.href = "/";
    fetch("/api/tracks").then(res => res.json()).then(data => setTrack(data.find(t => t.id === params.id)));
  }, [params.id]);

  if (!track) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-2 font-bold">{track.title}</h1>
      <p><strong>Artist:</strong> {track.artist}</p>
      <p><strong>Release Date:</strong> {track.releaseDate}</p>
      <p><strong>Genre:</strong> {track.genre}</p>
      <p><strong>Status:</strong> {track.status}</p>
    </div>
  );
}
