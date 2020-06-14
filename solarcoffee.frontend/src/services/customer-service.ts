import { Customer } from '@/types/Customer';
import Axios from 'axios';
import { ServiceResponse } from '../types/ServiceResponse';

export default class CustomerService {
  API_URL = process.env.VUE_APP_API_URL;

  /**
   * async getCustomers, Customer Service
   * Provides UI Business logic associated with customers in our system
   */
  public async getCustomers(): Promise<Customer[]> {
    const result: any = await Axios.get(`${this.API_URL}/customer/`);

    return result.data;
  }

  public async addCustomer(
    newCustomer: Customer
  ): Promise<ServiceResponse<Customer>> {
    const result: any = await Axios.post(
      `${this.API_URL}/customer/`,
      newCustomer
    );

    return result.data;
  }

  public async deleteCustomer(customerId: number): Promise<boolean> {
    const result: any = await Axios.delete(
      `${this.API_URL}/customer/${customerId}`
    );

    return result.data;
  }
}
