export interface Customer {
  id: number;
  createdOn: Date;
  updatedOn: Date;
  firstName: string;
  lastName: string;
  primaryAddress: CustomerAddress;
}

export interface CustomerAddress {
  id: number;
  createdOn: Date;
  updatedOn?: Date;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
