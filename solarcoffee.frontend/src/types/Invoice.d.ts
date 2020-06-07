import { Product } from "./Product.d";

export interface Invoice {
  customerId: number;
  lineItems: LineItem[];
  createdOn: Date;
  updatedOn: Date;
}

export interface LineItem {
  product?: Product;
  quantity: number;
}
