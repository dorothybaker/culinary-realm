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
    <div className="border rounded-md h-10 flex items-center justify-center px-2">
      <select
        className="outline-none font-semibold border-none max-w-[7.5rem] h-full flex items-center"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
        defaultValue="Miscellaneous"
      >
        <optgroup label="Categories" className="text-base font-semibold">
          <option value="Miscellaneous" className="text-sm h-[2em] font-medium">
            All categories
          </option>
          {categories?.meals?.map((category: any, id: any) => (
            <option
              value={category?.strCategory}
              key={id}
              className="text-sm h-[2em] font-medium"
            >
              {category?.strCategory}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
}
