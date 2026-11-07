function updateClock() {
  const now = new Date();

  // Format the timezone
  const timeString = now.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  document.getElementById("clock").textContent = timeString;
}

// Updates every second
updateClock();
setInterval(updateClock, 1000);
