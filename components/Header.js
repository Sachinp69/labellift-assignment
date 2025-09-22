"use client"
import Link from "next/link";
import { useTheme } from "../app/themeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 flex flex-col sm:flex-row justify-between items-center bg-gray-200 dark:bg-gray-800">
      <h1 className="font-bold text-xl mb-2 sm:mb-0">Mini Music Dashboard</h1>
      <div className="flex gap-4 items-center">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/track/upload" className="hover:underline">Upload</Link>
        <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
}
 export default Header;