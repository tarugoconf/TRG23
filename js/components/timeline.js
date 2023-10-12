import { DataSet, Timeline } from "../deps/timeline.js";
import today from "./today.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.dataset.events);
    const items = new DataSet(data);
    const groups = this.dataset.groups
      ? JSON.parse(this.dataset.groups)
      : undefined;
    const first = new Date(data[0].start);
    const hours = window.innerWidth / 400;

    const inTheEvent = today.getMonth() === first.getMonth() &&
      today.getFullYear() === first.getFullYear() &&
      today.getDate() === first.getDate();

    // Fake now
    const now = new Date(today);

    if (!inTheEvent) {
      now.setTime(first.getTime());
    }

    const start = new Date(now);
    start.setTime(now.getTime() - 1000 * 60 * 60 * (hours * 0.3));
    const end = new Date(start);
    end.setTime(start.getTime() + 1000 * 60 * 60 * hours);
    const options = {
      zoomable: false,
      start,
      end,
      minHeight: 400,
      groupHeightMode: "fixed",
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

    this.timeline = new Timeline(this, items, groups, options);

    if (inTheEvent) {
      this.timeline.addCustomTime(now);
    }
  }
}

customElements.define("trg-timeline", TRGTimeline);
