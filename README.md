# Mini Music Distribution Dashboard

A simple **Next.js 15 + Tailwind CSS v4** dashboard for managing music tracks, built as a frontend assessment project. Includes login, track listing, uploading, details, search, and a theme toggle.  

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
- [Approach](#approach)  
- [Future Improvements](#future-improvements)  

---

## Demo
![login](./public/login.png)
![dashboard](./public/dashboard.png)
![login](./public/upload.png)
![login](./public/track-uploaded.png)
![login](./public/search.png)

## Features

✅ **Login Page (Mock Authentication)**  
- Simple username/password form  
- Redirects to dashboard on login (mock validation)  

✅ **Dashboard Page**  
- Displays a list of tracks in a table: Title, Artist, Release Date, Status  
- Fetches data from Next.js API route (`/api/tracks`)  
- Search/filter by title or artist  

✅ **Track Upload Page**  
- Form to add new tracks (Track Title, Artist, Release Date, Genre)  
- Adds track to dashboard list via API POST request  

✅ **Track Details Page**  
- Dynamic route (`/track/[id]`)  
- Shows all track details, fetched from API  

✅ **Theme Toggle (Bonus)**  
- Light/dark mode toggle button  
- Persists theme in `localStorage`  

✅ **Responsive Design**  
- Fully usable on desktop, tablet, and mobile  

---

## Tech Stack

- **Next.js 15** (App Router)  
- **React** (Functional Components + Hooks)  
- **Tailwind CSS v4**  
- Mock backend via **Next.js API Routes**  

---

## Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/Sachinp69/labellift-assignment
cd <repo-folder>
pnpm run dev