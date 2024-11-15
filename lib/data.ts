import { endpoints } from "@/app/utils/endpoints";
import { myAxios } from "./utils";

export const getCountries = async ({
  name,
  region,
}: {
  name?: string;
  region?: string;
}) => {
  try {
    if (name) {
      const { data } = await myAxios.get(`/${endpoints.getCountry}${name}`);

      return data;
    } else if (region) {
      const { data } = await myAxios.get(`/${endpoints.region}/${region}`);
      return data;
    } else {
      const { data } = await myAxios.get(`/${endpoints.allCountries}`);

      return data;
    }
  } catch {
    return { message: "Unable to get countries data" };
  }
};

export const fetchBorder = async (borders?: string[]) => {
  if (!borders) return [];
  if (borders.length === 0) return [];
  const results = await Promise.all(
    borders.map(async (border) => {
      const { data } = await myAxios.get(
        `${endpoints.getCountryByCode}${border}`
      );
      return data;
    })
  );
  return results;
};
