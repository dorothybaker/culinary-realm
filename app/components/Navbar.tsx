"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-primary w-full">
      <div className="max-w-7xl mx-auto w-full sm:px-6 sm:py-6 py-4 px-3 flex gap-2 items-center">
        <Link href="/" className="text-background font-semibold text-3xl">
          Culinary Realm
        </Link>
      </div>
    </div>
  );
}
