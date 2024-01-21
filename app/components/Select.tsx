"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectComponent() {
  const [categories, setCategories] = useState<any>(null);
  const [value, setValue] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (category: string) => {
    router.push(`?category=${category}`);
  };

  return (
    <select
      className="flex h-10 w-[8rem] items-center justify-between rounded-md border border-input bg-background px-3 py-2 outline-none"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        handleChange(e.target.value);
      }}
    >
      <option disabled selected className="text-sm font-semibold line-clamp-1">
        Select a category
      </option>

      {categories?.meals?.map((category: any, id: any) => (
        <option value={category?.strCategory} key={id}>
          {category?.strCategory}
        </option>
      ))}
    </select>
  );
}
