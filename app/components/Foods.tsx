"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Food from "./Food";
import Loading from "./Loading";

export default function Foods() {
  const [foods, setFoods] = useState<any>(null);
  const searchParams = useSearchParams();

  let category!: string | null;
  if (searchParams.get("category")) {
    category = searchParams.get("category");
  } else {
    category = "Miscellaneous";
  }

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [category]);

  if (!foods) {
    return <Loading />;
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 md:px-4 px-3 place-content-center h-full">
      {foods?.meals?.map((food: any, id: any) => (
        <Food key={id} food={food} />
      ))}
    </div>
  );
}
