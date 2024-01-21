"use client";

import { useSearchParams } from "next/navigation";
import SearchFeed from "./components/SearchFeed";
import Foods from "././components/Foods";
import Search from "./components/Search";

export default function Home() {
  const searchParams = useSearchParams();

  const query = searchParams.has("query");
  const category = searchParams.has("category");

  let universal;
  if (query === false && category === false) {
    universal = true;
  }

  return (
    <div className="max-w-7xl mb-7 mx-auto">
      <Search />
      <div className="border-t py-2">
        {query && <SearchFeed />}
        {category && <Foods />}
        {universal && <Foods />}
      </div>
    </div>
  );
}
