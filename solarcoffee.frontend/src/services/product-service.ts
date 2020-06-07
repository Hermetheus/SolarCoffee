import axios from "axios";
import { Product } from "./../types/Product.d";

// Product Service, Provides UI business logic associated with products

export class ProductService {
  API_URL = process.env.VUE_APP_API_URL;

  async archive(productId: number) {
    const result: any = await axios.patch(
      `${this.API_URL}/product/${productId}`
    );
    return result.data;
  }

  async save(newProduct: Product) {
    const result = await axios.post(`${this.API_URL}/product/`, newProduct);

    return result.data;
  }
}
