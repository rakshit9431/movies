"use client";

export default function Navbar({ onSearch }) {
  return (
    <div className="fixed top-0 w-full bg-black p-4 flex justify-between z-50">
      <h1 className="text-red-600 text-2xl font-bold">NETFLIX</h1>

      <input
        placeholder="Search movie..."
        className="bg-gray-800 px-3 py-1 rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
