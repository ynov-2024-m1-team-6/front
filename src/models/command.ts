import { Product } from "./product";
import { Status } from "./status";

export interface Command {
  id: number;
  number: string;
  products: Product[];
  date: Date;
  status: Status;
}
