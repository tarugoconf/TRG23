import { DataSet, Timeline } from "../deps/timeline.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.dataset.events);
    const items = new DataSet(data);
    const first = new Date(data[0].start);
    const hours = window.innerWidth / 400;

    // Fake now
    const now = new Date();
    now.setDate(first.getDate());
    now.setMonth(first.getMonth());
    now.setFullYear(first.getFullYear());

    const start = new Date(now);
    start.setTime(now.getTime() - 1000 * 60 * 60 * (hours / 2));
    const end = new Date(start);
    end.setTime(start.getTime() + 1000 * 60 * 60 * hours);
    const options = {
      zoomable: false,
      start,
      end,
      height: 400,
      groupHeightMode: "fixed",
      // order: (a, b) => a.start.getTime() - b.start.getTime(),
      orientation: {
        axis: "top",
        item: "top",
      },
      type: "range",
      xss: {
        disabled: true,
      },
      stackSubgroups: true,
      showMajorLabels: false,
    };

    this.timeline = new Timeline(this, items, options);
    this.timeline.addCustomTime(now);
  }
}

customElements.define("trg-timeline", TRGTimeline);
