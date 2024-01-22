"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Food from "./Food";
import LoadingFoods from "./LoadingFoods";

export default function SearchFeed() {
  const [foods, setFoods] = useState<any>(null);
  const searchParams = useSearchParams();

  let query!: string | null;
  if (searchParams.get("query")) {
    query = searchParams.get("query");
  }

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [query]);

  if (!foods) {
    return <LoadingFoods />;
  }

  if (foods?.meals !== null) {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 md:px-4 px-3 place-content-center h-full">
        {foods?.meals?.map((food: any, id: any) => (
          <Food key={id} food={food} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="my-5 flex justify-center px-3 items-center font-bold text-primary/70 text-2xl">
        Sorry, {query} is not available at the moment!
      </div>
    );
  }
}
