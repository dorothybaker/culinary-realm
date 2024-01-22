"use client";

import { useSearchParams } from "next/navigation";
import SearchFeed from "./components/SearchFeed";
import Foods from "././components/Foods";
import Search from "./components/Search";
import { Suspense } from "react";
import Latest from "./components/Latest";
import LoadingFoods from "./components/LoadingFoods";

const FoodPage = () => {
  const searchParams = useSearchParams();

  const query = searchParams.has("query");
  const category = searchParams.has("category");

  if (query || category) {
    return (
      <div className="border-t py-2">
        {query && <SearchFeed />}
        {category && <Foods />}
      </div>
    );
  } else {
    return <Latest />;
  }
};

export default function Home() {
  return (
    <div className="max-w-7xl mb-7 mx-auto">
      <Search />
      <Suspense fallback={<LoadingFoods />}>
        <FoodPage />
      </Suspense>
    </div>
  );
}
