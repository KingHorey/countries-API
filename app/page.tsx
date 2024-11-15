import Container from "./custom/container";

import SearchBox from "./custom/search";
import Dropdown from "./custom/dropdown";
import Content from "./content";
import React from "react";

export default function Home({ searchParams }) {
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
