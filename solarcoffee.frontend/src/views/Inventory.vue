<template>
  <div class="inventory-container">
    <h1 id="inventoryTitle">
      Inventory Data
    </h1>
    <hr />

    <div class="inventory-actions">
      <solar-button @click.native="showNewProductModal" id="addNewBtn"
        >Add New Item
      </solar-button>
      <solar-button @click.native="showShipmentModal" id="receiveShipmentBtn"
        >Receive Shipment
      </solar-button>
    </div>

    <table id="inventoryTable" class="table">
      <tr>
        <th>Item</th>
        <th>Quantity On-Hand</th>
        <th>Unit Price</th>
        <th>Taxable</th>
        <th>Delete</th>
      </tr>

      <tr v-for="item in inventory" :key="item.id">
        <td>
          {{ item.product.name }}
        </td>
        <td>
          {{ item.quantityOnHand }}
        </td>
        <td>
          {{ item.product.price | price }}
        </td>

        <td>
          <span v-if="item.product.isTaxable">
            Yes
          </span>
          <span v-else>No</span>
        </td>

        <td>
          <div>
            x
          </div>
        </td>
      </tr>
    </table>

    <new-product-modal v-if="isNewProductVisible"></new-product-modal>
    <shipment-modal v-if="isShipmentVisible"></shipment-modal>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { ProductInventory } from '../types/Product';
  import SolarButton from '../components/SolarButton.vue';

  @Component({
    name: 'Inventory',
    components: { SolarButton },
  })
  export default class Inventory extends Vue {
    isNewProductVisible = false;
    isShipmentVisible = false;

    inventory: ProductInventory[] = [
      {
        id: 1,
        product: {
          id: 1,
          name: 'Some Product',
          description: 'Good Stuff',
          price: 100,
          createdOn: new Date(),
          updatedOn: new Date(),
          isTaxable: true,
          isArchived: false,
        },
        quantityOnHand: 100,
        idealQuantity: 100,
      },
      {
        id: 2,
        product: {
          id: 2,
          name: 'Another Product',
          description: 'Good Stuff',
          price: 100,
          createdOn: new Date(),
          updatedOn: new Date(),
          isTaxable: false,
          isArchived: false,
        },
        quantityOnHand: 40,
        idealQuantity: 20,
      },
    ];

    showNewProductModal() {}

    showShipmentModal() {}
  }
</script>

<style lang="scss" scoped></style>
