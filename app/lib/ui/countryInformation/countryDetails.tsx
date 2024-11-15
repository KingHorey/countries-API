import { formatter } from "@/lib/utils";
import { fetchBorder } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CountryDetails = async ({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
  nativeName,
}: {
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string;
  currencies: { name: string }[];
  languages: string[];
  borders: string[];
  nativeName: string;
}) => {
  const border = await fetchBorder(borders);

  return (
    <div className="flex flex-col w-full md:w-3/5 xs:justify-start md:justify-center xs:gap-y-3 lg:gap-y-10 md:mt-10">
      <h1 className={`xs:text-xl sm:text-xl lg:text-3xl font-bold`}>{name}</h1>
      <div className="md:grid md:grid-cols-2 md:gap-x-5">
        <div className="flex flex-col xs:gap-y-3 lg:gap-y-2 xs:text-sm md:text-base">
          <p className="font-bold">
            Native Name: <span className="font-normal">{nativeName}</span>
          </p>

          <p className="font-bold xs:text-sm md:text-base">
            Population:{" "}
            <span className="font-normal">{formatter(population)}</span>
          </p>
          <p className="font-bold">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="font-bold">
            Sub Region: <span className="font-normal">{subregion}</span>
          </p>
          <p className="font-bold">
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
        <div className="flex flex-col xs:gap-y-3 lg:gap-y-3 xs:mt-10 md:mt-0 xs:text-sm md:text-base">
          <p className="font-bold">
            Top Level Domain: <span className="font-normal">{tld}</span>
          </p>

          <p className="font-bold">
            Currencies:{" "}
            <span className="font-normal">
              {currencies.map((currency, count) => (
                <span key={count}>
                  {currency.name}
                  {count !== currencies.length - 1 && ", "}
                </span>
              ))}
            </span>
          </p>
          <p className="font-bold">
            Languages:{" "}
            <span className="font-normal">
              {languages.map((language, count) => (
                <span key={count}>
                  {language}
                  {count !== languages.length - 1 && ", "}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
      <div className="xs:mt-10 flex flex-col md:mt-0">
        <h2 className="font-semibold">Border Countries: {}</h2>
        <div className="flex gap-5 mt-5 flex-wrap">
          {border.map((country, count) => (
            <Button
              variant="outline"
              key={count}
              asChild
              className="rounded-sm dark:bg-darkBlue bg-offWhite dark:text-white text-darkBlue"
            >
              <Link href={`/country/${country["0"].name.common}`}>
                {country["0"].name.common}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
