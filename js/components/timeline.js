import { DataSet, Timeline } from "../deps/timeline.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const areas = [
      {
        content: 'Jueves 26',
        start: '2023-10-26 15:00',
        end: '2023-10-26 22:00',
        type: 'background'
      },
      {
        content: 'Sábado 27',
        start: '2023-10-27 09:00',
        end: '2023-10-27 22:30',
        type: 'background'
      },
      {
        content: 'Domingo 28',
        start: '2023-10-28 11:00',
        end: '2023-10-28 16:00',
        type: 'background'
      },
    ];
    const data = JSON.parse(this.dataset.events).map((item, order) => ({ ...item, order }));
    const items = new DataSet([...data, ...areas]);
    const start = new Date("2023-10-26 14:00");
    const end = new Date("2023-10-26 14:00");
    const hours = (window.innerWidth / 400); // 1 hour every 400px
    end.setTime(start.getTime() + 1000 * 60 * 60 * hours);
    const options = {
      zoomable: false,
      start,
      end,
      height: 400,
      groupHeightMode: "fixed",
      order: (a, b) => a.order - b.order,
      orientation: {
        axis: "bottom",
        items: "top"
      },
      type: "range",
      xss: {
        disabled: true,
      }
    };

    this.timeline = new Timeline(this, items, options);
  }
}

customElements.define("trg-timeline", TRGTimeline);
