import Link from "next/link";

interface FoodProps {
  [x: string]: string | undefined;
  food: any;
}

export default function Food({ food }: { food: FoodProps }) {
  return (
    <Link
      href={`/food/${food?.idMeal}`}
      className="flex flex-col gap-1 border p-2 shadow-sm rounded-md"
    >
      <div>
        <img
          src={food?.strMealThumb}
          alt=""
          className="object-contain rounded-md"
        />
      </div>
      <h1 className="px-1 line-clamp-1 font-semibold text-center">
        {food?.strMeal}
      </h1>
    </Link>
  );
}
