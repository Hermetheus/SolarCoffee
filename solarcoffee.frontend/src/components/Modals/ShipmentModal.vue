<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SolarButton from "../components/SolarButton.vue";

@Component({
  name: "ShipmentModal",
  components: { SolarButton }
})
export default class ShipmentModal extends Vue {}
</script>

<style lang="scss" scoped></style>
