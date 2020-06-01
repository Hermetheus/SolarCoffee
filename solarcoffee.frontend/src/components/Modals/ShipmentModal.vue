<!--suppress XmlUnboundNsPrefix -->

<template>
  <solar-modal>
    <template v-slot:header>
      Receive Shipment
    </template>
    <template v-slot:body>
      <label for="product">Product Received:</label>
      <select id="product" v-model="selectedProduct" class="shipmentItems">
        <option value="" disabled>Please select one</option>
        <option v-for="item in inventory" :value="item" :key="item.product.id">
          {{ item.product.name }}
        </option>
      </select>
      <label for="qtyReceived">Quantity Received:</label>
      <input type="number" id="qtyReceived" v-model="qtyReceived" />
    </template>
    <template v-slot:footer>
      <solar-button
        type="button"
        @button:click="save"
        aria-label="save new shipment"
      >
        Save Received Shipment
      </solar-button>
      <solar-button type="button" @button:click="close" aria-label="Close modal"
        >Close</solar-button
      >
    </template>
  </solar-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductInventory, Product } from "../../types/Product";
import { Shipment } from "../../types/Shipment";
import SolarButton from "../SolarButton.vue";
import SolarModal from "./SolarModal.vue";

@Component({
  name: "ShipmentModal",
  components: { SolarButton, SolarModal }
})
export default class ShipmentModal extends Vue {
  @Prop({ required: true, type: Array as () => ProductInventory[] })
  inventory!: ProductInventory[];

  selectedProduct: Product = {
    createdOn: new Date(),
    updatedOn: new Date(),
    id: 0,
    description: "",
    isTaxable: false,
    isArchived: false,
    name: "",
    price: 0
  };

  qtyReceived = 0;

  close() {
    this.$emit("close");
  }

  save() {
    const shipment: Shipment = {
      productId: this.selectedProduct.id,
      adjustment: this.qtyReceived
    };

    this.$emit("save:shipment", shipment);
  }
}
</script>

<style lang="scss" scoped></style>
