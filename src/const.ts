import { SortingType } from "./types";

export const BASE_URL = "https://front-assignment-api.2tapp.cc/api";

export enum NameSpace {
  Data = "DATA",
}

export const InitialSorting: SortingType = {
  byName: false,
  byNameReverse: false,
  byAge: false,
  byAgeReverse: false,
  byRating: false,
  byRatingReverse: false,
};

export const SortingMap = {
  byName: "Имя А-Я",
  byNameReverse: "Имя Я-А",
  byAge: "Сначала моложе",
  byAgeReverse: "Сначала старше",
  byRatingReverse: "Высокий рейтинг",
  byRating: "Низкий рейтинг",
};
export type SortingKeys =
  | "byName"
  | "byNameReverse"
  | "byAge"
  | "byAgeReverse"
  | "byRating"
  | "byRatingReverse";
