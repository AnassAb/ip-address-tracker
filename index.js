const input = document.getElementById("search-input");
const button = document.getElementById("search-btn");
const ip = document.getElementById("ip");
const location_id = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");

window.addEventListener("load", (event) => {
  IpTracker();
});

button.addEventListener("click", (event) => {
  IpTracker();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    button.click();
  }
});
function IpTracker() {
  let api_key = "at_fdUGt22nmZFwQjTZiSNBtJvHtO9sW";
  let url =
    "https://geo.ipify.org/api/v2/country,city?apiKey=" +
    api_key +
    "&ipAddress=" +
    input.value;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch(function (error) {
      console.log(error);
    });
}

function setData(data) {
  let ip_value = data.ip;
  let location_value =
    data.location.city +
    " " +
    data.location.region +
    " " +
    data.location.postalCode;
  let timezone_value = "UTC" + data.location.timezone;
  let isp_value = data.isp;
  let lat = data.location.lat;
  let lng = data.location.lng;

  ip.innerHTML = ip_value;
  location_id.innerHTML = location_value;
  timezone.innerHTML = timezone_value;
  isp.innerHTML = isp_value;
}
