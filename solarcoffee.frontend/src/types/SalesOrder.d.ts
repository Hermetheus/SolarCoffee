import { Customer } from "./Customer.d";
import { LineItem } from "./Invoice.d";

export interface SalesOrder {
  id: number;
  createdOn: Date;
  updatedOn?: Date;
  customer: Customer;
  isPaid: boolean;
  salesOrderItems: LineItem[];
}
