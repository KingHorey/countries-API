import { formatter } from "@/lib/utils";

const CountryInfo = ({
  name,
  population,
  region,
  capital,
}: {
  name: string;
  population: number;
  region: string;
  capital: string[];
}) => {
  return (
    <div className="xs:px-3 md:px-10 py-5 h-full dark:bg-darkBlue flex flex-col gap-y-5 dark:text-white rounded-b-sm">
      <h2 className="text-sm font-bold">{name}</h2>
      <ul className="flex flex-col gap-y-3">
        <li className="text-sm font-semibold">
          Population:{" "}
          <span className="dark:text-white/80 font-normal">
            {formatter(population)}
          </span>
        </li>
        <li className="text-sm font-semibold">
          Region:{" "}
          <span className="dark:text-white/80 font-normal">{region}</span>
        </li>
        <li className="text-sm font-semibold">
          Capital:{" "}
          {capital?.map((capita, count) =>
            count === capital.length - 1 ? (
              <span
                className="dark:text-white/80 font-normal text-xs"
                key={count}
              >
                {capita}
              </span>
            ) : (
              <span
                className="dark:text-white/80 font-normal text-xs"
                key={count}
              >
                {capita},{" "}
              </span>
            )
          )}
        </li>
      </ul>
    </div>
  );
};

export default CountryInfo;
