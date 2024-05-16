const clock = document.getElementById("clock");
function updateClock() {
    const currentDate = new Date();
    clock.innerHTML = currentDate;
}

setInterval(updateClock, 1000);
