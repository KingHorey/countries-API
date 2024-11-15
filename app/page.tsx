/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "./custom/container";

import SearchBox from "./custom/search";
import Dropdown from "./custom/dropdown";
import Content from "./content";
import React from "react";

interface HomeProps {
  searchParams: any; // Replace 'any' with the appropriate type if known
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="mx-auto bg-offWhite py-10 dark:bg-veryDarkBlue min-h-screen">
      <Container>
        <div className="flex xs:gap-y-10 lg:flex-row flex-col justify-between items-center">
          <SearchBox />
          <Dropdown />
        </div>
        <Content searchParams={searchParams} />
      </Container>
    </div>
  );
}
