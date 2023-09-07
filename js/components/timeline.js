import { DataSet, Timeline } from "../deps/timeline.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const data = this.dataset.events;
    const items = new DataSet(JSON.parse(data));

    const options = {
      zoomable: false,
      zoomMax: window.innerWidth > 1000
        ? 60*60*3*1000
        : 60*60*12*1000,
      start: "2023-10-27 08:00",
      minHeight: 460,
      end: "2023-10-27 12:00",
    };

    this.timeline = new Timeline(this, items, options);
  }
}

customElements.define("trg-timeline", TRGTimeline);
