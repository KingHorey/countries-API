import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const myAxios = axios.create({
  baseURL: "https://restcountries.com",
});

export const formatter = (value: number) =>
  new Intl.NumberFormat().format(value);

