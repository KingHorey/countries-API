"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { searchParam } from "../utils/types";

import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBox = () => {
  const debounce = useDebouncedCallback;
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const form = useForm<z.infer<typeof searchParam>>({
    resolver: zodResolver(searchParam),
    defaultValues: {
      name: params.get("name") || "",
    },
  });

  const handleSearch = debounce((text) => {
    const query = new URLSearchParams(params);
    if (text) {
      query.delete("region");
      query.set("name", text);
    } else {
      query.delete("name");
    }
    replace(`${pathname}?${query.toString()}`);
  }, 300);

  return (
    <div className=" xs:w-full">
      <Form {...form}>
        <form className="xs:w-full lg:w-[390px] relative shadow-lg rounded-md">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormControl>
                <Input
                  placeholder="Search for a country..."
                  className="dark:bg-darkBlue bg-darkGray bg- p-6 align-text-top pl-14 border-none active:border-none focus-within:border-none focus:border-none rounded-md dark:text-white"
                  {...field}
                  onChange={(data) => {
                    field.onChange(data);
                    handleSearch(data.target.value);
                  }}
                />
              </FormControl>
            )}
          />
          <MagnifyingGlassIcon
            className="absolute top-4 left-8 text-gray-500 dark:text-white/80"
            width={18}
            height={18}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchBox;
