export interface InventoryTimeline {
  productInventorySnapshots: Snapshot[];
  timeline: Date[];
}

export interface Snapshot {
  productId: number;
  quantityOnHand: number[];
}
