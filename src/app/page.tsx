"use client"

import { useState } from "react"

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([])

  async function handleFetchUsers() {
    const res = await fetch("/api/users")
    if (!res.ok) {
      alert("Erreur : " + (await res.json()).error)
      return
    }
    const data = await res.json()
    setUsers(data)
  }

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Liste d’utilisateurs</h1>

        <button
          onClick={handleFetchUsers}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Charger 5 utilisateurs
        </button>

        <ul className="mt-6 space-y-3">
          {users.map((u) => (
            <li
              key={u.id}
              className="rounded p-4 bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <p className="text-sm text-gray-500">ID : {u.id}</p>
              <p className="font-semibold">Nom : {u.name}</p>
              <p className="text-gray-700">Email : {u.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
