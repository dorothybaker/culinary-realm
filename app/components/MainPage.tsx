"use client";

import { useSearchParams } from "next/navigation";
import SearchFeed from "./SearchFeed";
import Foods from "./Foods";

export default function Home() {
  const searchParams = useSearchParams();

  const query = searchParams.has("query");
  const category = searchParams.has("category");

  return (
    <div>
      <div className="border-t py-2">
        {query && <SearchFeed />}
        {category && <Foods />}
      </div>
    </div>
  );
}
