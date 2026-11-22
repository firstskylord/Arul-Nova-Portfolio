function updateClock() {
  const now = new Date();

  // Format the timezone
  const timeString = now.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("clock").textContent = timeString;
}

// Updates every second
updateClock();
setInterval(updateClock, 1000);
