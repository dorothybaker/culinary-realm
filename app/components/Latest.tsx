"use client";

import { useEffect, useState } from "react";
import LoadingLatest from "./LoadingLatest";

export default function Latest() {
  const [categories, setCategories] = useState<any>(null);

  const fetchFullCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFullCategories();
  }, []);

  if (!categories) {
    return <LoadingLatest />;
  }

  return (
    <div className="border-t md:px-4 px-3">
      <div className="flex flex-col gap-4 my-4">
        {categories?.categories?.map((category: any) => (
          <div key={category?.idCategory} className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="h-[40px] aspect-square flex items-center justify-center rounded-full bg-primary-foreground border-primary border-2 overflow-hidden">
                <img
                  src={category?.strCategoryThumb}
                  alt=""
                  className="object-cover"
                />
              </div>
              <h1 className="text-base font-semibold">
                {category?.strCategory}
              </h1>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: category?.strCategoryDescription,
              }}
              className="tracking-wide leading-relaxed"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
