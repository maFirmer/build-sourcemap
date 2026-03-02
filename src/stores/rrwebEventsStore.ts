import { defineStore } from "pinia";
import { eventWithTime } from "@rrweb/types";

interface RrwebEventsType {
  rrwebEvents: eventWithTime[];
}

export const useRrwebEventsStore = defineStore("rrwebEventsStore", {
  state: (): RrwebEventsType => ({
    rrwebEvents: [],
  }),
  actions: {
    setRrwebEvents(events: eventWithTime[]) {
      this.rrwebEvents = events;
    },
    getRrwebEvents() {
      return this.rrwebEvents;
    },
  },
});
