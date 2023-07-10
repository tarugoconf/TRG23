import { DataSet, Timeline } from "../deps/timeline.js";

class TRGTimeline extends HTMLElement {
  connectedCallback() {
    const items = new DataSet([
      {
        start: "2013-10-26 15:30",
        end: "2013-10-26 18:00",
        content: `
        <strong>Taller: Product design para no-diseñadores</strong>
        Por <a href="#">Cris Busquets</a>
        `,
      },
      {
        start: "2013-10-26 15:30",
        end: "2013-10-26 18:00",
        content: `
        <strong>Taller: Cómo diseñar la arquitectura de tus repositorios de código</strong>
        Por <a href="#">Pablo Santos</a>
        `,
      },
      {
        start: "2013-10-26 15:30",
        end: "2013-10-26 18:00",
        content: `
        <strong>Taller: Herramientas y procesos para equipos de desarrollo de alto rendimiento</strong>
        Por <a href="#">Manuel Recena</a>
        `,
      },
      {
        start: "2013-10-26 18:00",
        end: "2013-10-26 20:00",
        content: "Networking",
      },
      {
        start: "2013-10-26 20:00",
        end: "2013-10-26 21:30",
        content: "Podcast en directo",
      },
      {
        start: "2013-10-27 09:00",
        end: "2013-10-27 10:00",
        content: "<strong>Apertura de puertas</strong><br> Pois eso",
      },
      {
        start: "2013-10-27 10:00",
        end: "2013-10-27 20:30",
        content: "Conferencias",
      },
      {
        start: "2013-10-27 20:30",
        end: "2013-10-27 22:30",
        content: "Fiesta",
      },
      {
        start: "2013-10-28 11:00",
        end: "2013-10-28 18:00",
        content: "Community Day",
      },
    ]);

    const options = {
      zoomable: false,
      zoomMax: 60*60*12*1000,
      start: "2013-10-26 12:00",
      minHeight: 350,
      end: "2013-10-26 23:59",
    };

    this.timeline = new Timeline(this, items, options);
  }
}

customElements.define("trg-timeline", TRGTimeline);
