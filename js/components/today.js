const today = new Date();
const params = new URLSearchParams(window.location.search);

if (params.has("day")) {
  today.setDate(parseInt(params.get("day")));
}
if (params.has("hour")) {
  today.setHours(parseInt(params.get("hour")));
}

export default today;
