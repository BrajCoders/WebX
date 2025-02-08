// 🕒 Live Bus & Train Arrivals (Updating every 5 seconds)
const arrivalList = document.getElementById("arrival-list");
const arrivals = [
    "🚆 Train A1 - Arriving in 5 mins",
    "🚌 Bus 220 - Arriving in 2 mins",
    "🚆 Metro X - Delayed by 3 mins"
];

function updateArrivals() {
    arrivalList.innerHTML = "";
    arrivals.forEach(arrival => {
        let li = document.createElement("li");
        li.innerText = arrival;
        arrivalList.appendChild(li);
    });
}
setInterval(updateArrivals, 5000);
updateArrivals();

// 🚦 Live Traffic Updates (Updating every 7 seconds)
const trafficStatus = document.getElementById("traffic-status");
const trafficLevels = ["🟢 Smooth Traffic", "🟡 Moderate Traffic", "🔴 Heavy Traffic"];

function updateTraffic() {
    let randomTraffic = trafficLevels[Math.floor(Math.random() * trafficLevels.length)];
    trafficStatus.innerText = randomTraffic;
}
setInterval(updateTraffic, 7000);
updateTraffic();

// 🔔 Urgent Alerts (Showing random alerts every 10 seconds)
const alertContainer = document.getElementById("alert-container");
const alerts = [
    "🚨 Train B2 has been delayed by 15 minutes!",
    "⚠️ Bus 450 route changed due to road closure.",
    "🌧️ Heavy rain expected, expect slower transit."
];

function showAlert() {
    alertContainer.innerHTML = "";
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert";
    alertDiv.innerText = alerts[Math.floor(Math.random() * alerts.length)];
    alertContainer.appendChild(alertDiv);
}
setInterval(showAlert, 10000);
showAlert();
