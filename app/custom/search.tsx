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

function SearchBox() {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const form = useForm<z.infer<typeof searchParam>>({
    resolver: zodResolver(searchParam),
    defaultValues: {
      name: params.get("name") ?? "",
    },
  });

  const handleSearch = useDebouncedCallback((text: string) => {
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
    <div className="xs:w-full">
      <Form {...form}>
        <form
          className="xs:w-full lg:w-[390px] relative shadow-lg rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = form.getValues();
            handleSearch(formData.name);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormControl>
                <Input
                  placeholder="Search for a country..."
                  className="dark:bg-darkBlue bg-white p-6 pl-14 border-none
                    rounded-md dark:text-white focus-visible:ring-0
                    focus-visible:ring-offset-0"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleSearch(e.target.value);
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
}

// Wrap in Suspense boundary for useSearchParams
export default function SearchBoxWrapper() {
  return (
    <React.Suspense
      fallback={
        <div className="xs:w-full lg:w-[390px] h-12 bg-white dark:bg-darkBlue rounded-md animate-pulse" />
      }
    >
      <SearchBox />
    </React.Suspense>
  );
}
