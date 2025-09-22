
  const tracks = [
    {
      id: 1,
      title: "Dreamscape",
      artist: "Aria Smith",
      releaseDate: "2024-05-10",
      genre: "Pop",
      status: "Published",
    },
    {
      id: 2,
      title: "Midnight Beats",
      artist: "DJ Raven",
      releaseDate: "2024-06-22",
      genre: "Electronic",
      status: "Draft",
    },
    {
      id: 3,
      title: "Echoes of Tomorrow",
      artist: "Liam Grey",
      releaseDate: "2024-07-01",
      genre: "Rock",
      status: "Submitted",
    },
  ]
export async function GET() {
  try {
    return new Response(JSON.stringify(tracks), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to fetch tracks" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const newTrack = { id: String(tracks.length + 1), ...data, status: 'Pending' };
    tracks.push(newTrack);
    return new Response(JSON.stringify(newTrack), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to add track" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
