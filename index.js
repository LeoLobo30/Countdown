const countDown        = document.querySelector("div.countDown");
const secondsToDays    = 24 * 60 * 60;
const secondsToHours   = 60 * 60;
const secondsToMinutes = 60;

let timeStart = 10 * 24 * 60 * 60; //day * hr * min * sec
let days, hours, minutes, seconds;

const interval = setInterval(timeReduction, 1000);

function timeConfigAndShow() {
  days    = Math.floor(timeStart / secondsToDays);
  hours   = Math.floor(timeStart % secondsToDays / secondsToHours);
  minutes = Math.floor((timeStart % secondsToHours) / secondsToMinutes);
  seconds = timeStart % secondsToMinutes;

  countDown.innerHTML = `
  <span class="menu">Dias</span><span></span><span class="menu">Horas</span><span></span><span class="menu">Minutos</span><span></span><span class="menu">Segundos</span>
  <span>${String(days).padStart(2,"00")}</span>
  <span>:</span>
  <span>${String(hours).padStart(2,"00")}</span>
  <span>:</span>
  <span>${String(minutes).padStart(2,"00")}</span>
  <span>:</span>
  <span>${String(seconds).padStart(2,"00")}</span>`;
}

function timeReduction() {
  if (timeStart > 0) {
    timeConfigAndShow();
    --timeStart;
  } else {
    timeConfigAndShow();
    clearInterval(interval);
  }
}
