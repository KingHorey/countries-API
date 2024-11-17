import Container from "@/app/custom/container";
import CountryFlag from "./countryFlag";

import { getCountries } from "@/lib/data";
import CountryDetails from "./countryDetails";

import { nunitoSans } from "@/lib/font";

const Information = async ({ name }: { name: string }) => {
  const countryName = name.replace(/-/g, " ");
  const data = await getCountries({ name: countryName });

  const {
    name: country,
    region,
    population,
    tld,
    languages,
    flags,
    subregion,
    capital,
    borders,
    currencies,
  } = data[0];

  function getNativeName(names: Record<string, { common: string }>) {
    const name = [Object.keys(names)[Object.keys(names).length - 1]];
    return names[name[0]].common;
  }

  function generateLanguages(languages: Record<string, string>) {
    return Array.from(Object.values(languages));
  }

  function generateCurrencies(currencies: Record<string, { name: string }>) {
    const currency = Array.from(Object.values(currencies)).map((currency) => ({
      name: currency.name,
    }));

    return currency;
  }

  return (
    <main
      className={`w-screen ${nunitoSans.className} dark:bg-veryDarkBlue bg-offWhite text-darkBlue dark:text-white`}
    >
      <Container>
        <div className="flex xs:flex-col md:flex-row xs:gap-y-10 md:gap-y-0 md:justify-between gap-x-10 items-center min-h-screen xs:py-10 py-0 ">
          <CountryFlag flag={flags.svg} name={country.official} />
          <CountryDetails
            name={country.common}
            region={region}
            subregion={subregion}
            population={population}
            capital={capital}
            tld={tld}
            currencies={generateCurrencies(currencies)}
            languages={generateLanguages(languages)}
            borders={borders}
            nativeName={getNativeName(country.nativeName)}
          />
        </div>
      </Container>
    </main>
  );
};

export default Information;
