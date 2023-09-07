import { DataSet, Timeline } from "../deps/timeline.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const data = this.dataset.events;
    const items = new DataSet(JSON.parse(data));
    const start = new Date("2023-10-27 08:00");
    const end = new Date("2023-10-27 08:00");
    const hours = (window.innerWidth / 400); // 1 hour every 400px
    end.setTime(start.getTime() + 1000 * 60 * 60 * hours);
    const options = {
      zoomable: false,
      start,
      end,
      height: 400,
      groupHeightMode: "fixed",
      orientation: {
        axis: "bottom",
        items: "top"
      },
      type: "range",
    };

    this.timeline = new Timeline(this, items, options);
  }
}

customElements.define("trg-timeline", TRGTimeline);
