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
    <Select
      onValueChange={(value) => {
        handleChange(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        {categories && (
          <SelectGroup>
            <SelectLabel>Food Categories</SelectLabel>
            {categories?.meals?.map((category: any, id: any) => (
              <SelectItem value={category?.strCategory} key={id}>
                {category?.strCategory}
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );
}
