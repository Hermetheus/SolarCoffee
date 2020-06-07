import axios from "axios";
import { Product, ProductInventory } from "./../types/Product.d";
import { Shipment } from "./../types/Shipment.d";

/**
 * Inventory Service
 * Provides UI Business Logic Associated with product inventory
 * **/
export class InventoryService {
  API_URL = process.env.VUE_APP_API_URL;

  public async getInventory(): Promise<ProductInventory[]> {
    console.log("get inventory" + this.API_URL);
    const result: any = await axios.get(`${this.API_URL}/inventory/`);

    return result.data;
  }

  public async updateInventoryQuantity(shipment: Shipment) {
    const result = await axios.patch(`${this.API_URL}/inventory/`, shipment);

    return result.data;
  }

  public async addNewProduct(product: Product) {
    const result = await axios.post(`${this.API_URL}/product/`);

    return result.data;
  }
}
