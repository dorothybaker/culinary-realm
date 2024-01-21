"use client";

import { FaSearch } from "react-icons/fa";
import SelectComponent from "./Select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleClick = (query: string) => {
    router.push(`?query=${query}`);

    setQuery("");
  };

  return (
    <div className="flex justify-center items-center w-full mx-auto px-3 sm:gap-3 gap-2 my-5">
      <SelectComponent />

      <h1 className="font-semibold">OR</h1>
      <div className="rounded-md flex">
        <input
          type="text"
          className="w-full sm:w-[400px] outline-none focus:outline-none border px-2 rounded-l-md"
          placeholder="Search Culinary Realm..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className="rounded-r-md bg-primary text-background p-3 cursor-pointer"
          onClick={() => handleClick(query)}
        >
          <FaSearch />
        </div>
      </div>
    </div>
  );
}
