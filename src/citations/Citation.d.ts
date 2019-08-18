import { Person } from "./Person";
import { any } from "prop-types";

export default interface Citation {
  id: string;
  volume: string;
  number: number;
  title?: string;
  authors?: Person[];
  editors?: Person[];
  rawText: string;
  location?: string;
  datePublished?: string | number | Record;
  series?: string;
  numberOfVolumes?: string | number;
  numberOfPages: any;
  material: any[];
  type: string;
  reviews: string[] = [];
  keywords: {
    code: string;
    raw: string;
    nameDE: string;
    nameEN: string;
  }[];
  comment: string;
}
