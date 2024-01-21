"use client";

import Loading from "@/app/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ReactPlayer from "react-player";

export default function Page({ params }: { params: { id: any } }) {
  const [foodDetail, setFoodDetail] = useState<any>(null);
  const router = useRouter();

  const fetchFoodDetail = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      const data = await response.json();

      setFoodDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodDetail();
  }, [params.id]);

  if (!foodDetail) {
    return <Loading />;
  }

  const ingredients = Object.keys(foodDetail?.meals[0])
    .filter((key) => key.includes("strIngredient"))
    .map((key) => foodDetail?.meals[0][key]);

  return (
    <div className="my-7 md:px-5 px-3">
      <div
        className="font-semibold flex gap-2 items-center text-primary cursor-pointer"
        onClick={() => router.back()}
      >
        <FaArrowLeft />
        <p>Back</p>
      </div>
      {foodDetail?.meals?.map((detail: any, id: any) => (
        <div key={id}>
          <h1 className="font-semibold sm:text-3xl text-2xl">
            {detail?.strMeal}
          </h1>
          <div className="flex sm:flex-row flex-col sm:gap-5 gap-3 items-start my-3">
            <div>
              <img
                src={detail?.strMealThumb}
                alt=""
                height="100%"
                className="object-contain rounded-md max-h-[392px]"
              />
            </div>
            <div className="font-medium flex flex-col gap-2 text-lg">
              <h3>
                <span className="font-semibold">Category:</span>{" "}
                {detail?.strCategory}
              </h3>
              <h3>
                <span className="font-semibold">Cuisine:</span>{" "}
                {detail?.strArea}
              </h3>
              {detail?.strTags && (
                <h3>
                  <span className="font-semibold">Meal Tags:</span>{" "}
                  {detail?.strTags}
                </h3>
              )}
              <div>
                <h3 className="font-semibold">Ingredients</h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {ingredients.map((ingredient: string, id: any) => {
                    if (ingredient !== "" && ingredient !== null) {
                      return (
                        <p key={id}>
                          {id + 1}. {ingredient}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Instructions:</h3>
            <div
              dangerouslySetInnerHTML={{ __html: detail?.strInstructions }}
              className="tracking-wide leading-relaxed text-lg"
            />
          </div>
          {detail?.strYoutube && (
            <div className="my-3">
              <h3 className="font-semibold text-xl">Video Instructions:</h3>
              <div className="mt-3 bg-primary-foreground rounded-md sm:h-[360px] h-[270px] w-full md:w-[640px]">
                <ReactPlayer
                  url={detail?.strYoutube}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
