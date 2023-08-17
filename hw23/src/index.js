const clockTitle = document.querySelector(".js-clock");

function christmasDday() {
    const christmas = new Date("2023-12-25");
    const today = new Date();
    const diff = christmas - today;

    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);   
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);

    clockTitle.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

setInterval(christmasDday, 1000);
