import { Articles } from "./articles";

export interface Response {
  status:string;
  totalResults:number;
  articles:Articles[];
}
