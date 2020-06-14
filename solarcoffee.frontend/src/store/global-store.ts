import { make } from 'vuex-pathify';
import { InventoryService } from './../services/inventory-service';
import { InventoryTimeline } from './../types/InventoryGraph';

class GlobalStore {
  snapshotTimeline: InventoryTimeline = {
    productInventorySnapshots: [],
    timeline: [],
  };

  isTimelineBuilt = false;
}

const state = new GlobalStore();

const mutations = make.mutations(state);

const actions = {
  //--noImplicitAny
  async assignSnapshots({ commit }: { commit: any }) {
    const inventoryService = new InventoryService();
    const res = await inventoryService.getSnapshotHistory();
    console.log(res);
    const timeline: InventoryTimeline = {
      productInventorySnapshots: res.productInventorySnapshots,
      timeline: res.timeline,
    };

    console.log(timeline, 'timeline');

    commit('SET_SNAPSHOT_TIMELINE', timeline);
    commit('SET_IS_TIMELINE_BUILT', true);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
