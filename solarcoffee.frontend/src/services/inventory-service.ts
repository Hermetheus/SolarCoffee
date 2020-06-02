import axios from 'axios';

/**
 * Inventory Service
 * Provides UI Business Logic Associated with product inventory
 * **/
export class InventoryService {
  API_URL = process.env.VUE_APP_API_URL;

  public async getInventory(): Promise<any> {
    console.log('get inventory' + this.API_URL);
    const result: any = await axios.get(`${this.API_URL}/inventory/`);

    return result.data;
  }
}
