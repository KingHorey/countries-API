/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import Flags from "./flags";
import CountryInfo from "./info";

import Link from "next/link";

const CountryComponent = ({
  flag,
  name,
  population,
  region,
  capital,
}: {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
}) => {
  function generateUrl(name: string) {
    return name.toLowerCase().replace(/ /g, "-");
  }

  return (
    <Card className="rounded-md xs:w-3/5 sm:w-4/5 xs:mx-auto md:w-full lg:w-full border-none shadow-md gap-5">
      <Link href={`/country/${generateUrl(name)}/`}>
        <CardContent className="flex flex-col xs:h-[370px] md:h-[350px] w-full p-0 rounded-sm gap-y-0">
          <Flags flag={flag} name={name} />
          <CountryInfo
            name={name}
            region={region}
            population={population}
            capital={capital}
          />
        </CardContent>
      </Link>
    </Card>
  );
};

export default CountryComponent;
