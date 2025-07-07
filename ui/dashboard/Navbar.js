'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link href="/dashboard" className="text-lg font-semibold text-blue-600">
        My Dashboard
      </Link>

      <div className="flex items-center gap-4">
        {session?.user?.username && (
          <span className="text-sm text-gray-700">
            Welcome, <strong>{session.user.username}</strong>
          </span>
        )}
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
