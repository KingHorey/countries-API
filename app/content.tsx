import { Key } from "react";
import CountryComponent from "./custom/countryComponent";
import { getCountries } from "@/lib/data";

export const revalidate = 3600; // invalidate every hour

const Content = async (props: {
  searchParams?: Promise<{ name?: string; region?: string }>;
}) => {
  const searchParams = await props.searchParams;
  const data = await getCountries(searchParams || {});

  // const name = searchParams?.get("name");
  return (
    <main className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 justify-items-stretch gap-10 gap-y-5 xs:gap-y-10 bg-transparent transition-all duration-500">
      {data &&
        data.map(
          (
            country: {
              name: { common: string };
              population: number;
              region: string;
              capital: string[];
              flags: { svg: string };
            },
            count: Key | null | undefined
          ) => (
            <CountryComponent
              key={count}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          )
        )}
    </main>
  );
};

export default Content;
