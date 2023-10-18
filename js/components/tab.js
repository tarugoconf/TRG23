import Tab from "../deps/tab.js";
import today from "./today.js";

customElements.define("trg-tabs", Tab);

const id_today = `#timeline-${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}-link`;
const tab_today = document.querySelector(id_today);

if (tab_today) {
  tab_today.click();
}
