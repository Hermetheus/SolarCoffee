import { make } from "vuex-pathify";
import { InventoryService } from "./../services/inventory-service";
import { InventoryTimeline } from "./../types/InventoryGraph.d";

class GlobalStore {
  snapShotTimeline: InventoryTimeline = {
    productInventorySnapshots: [],
    timeline: []
  };

  isTimelineBuilt = false;
}

const state = new GlobalStore();

const mutations = make.mutations(state);

const actions = {
  async assignSnapshots({ commit }) {
    const inventoryService = new InventoryService();
    const res = await inventoryService.getSnapshotHistory();

    const timeline: InventoryTimeline = {
      productInventorySnapshots: res.productInventorySnapshots,
      timeline: res.timeline
    };

    commit("SET_SNAPSHOT_TIMELINE", timeline);
    commit("SET_IS_TIMELINE_BUILT", true);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
