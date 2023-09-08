import { DataSet, Timeline } from "../deps/timeline.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.dataset.events);
    const items = new DataSet(data);
    const start = new Date(data[0].start);
    start.setTime(start.getTime() - 1000 * 60 * 15);
    const end = new Date(start);
    const hours = window.innerWidth / 400; // 1 hour every 400px
    end.setTime(start.getTime() + 1000 * 60 * 60 * hours);
    const options = {
      zoomable: false,
      start,
      end,
      height: 400,
      groupHeightMode: "fixed",
      order: (a, b) => a.start.getTime() - b.start.getTime(),
      orientation: {
        axis: "top",
        item: "top",
      },
      type: "range",
      xss: {
        disabled: true,
      },
      showMajorLabels: false,
    };

    this.timeline = new Timeline(this, items, options);
  }
}

customElements.define("trg-timeline", TRGTimeline);
