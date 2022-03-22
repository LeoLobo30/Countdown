const countDown = document.querySelector("div.countDown");

let timeStart = 2 * 24 * 60 * 60; //day * hr * min * sec

function timeConfigAndShow() {
  let days = Math.floor(timeStart / (24 * 60 * 60));
  let hours = Math.floor(timeStart / (60 * 60));
  let minutes = Math.floor((timeStart % (60 * 60)) / 60);
  let seconds = timeStart % 60;

  countDown.innerHTML = `
  <span class="menu">Dias</span><span></span><span class="menu">Horas</span><span></span><span class="menu">Minutos</span><span></span><span class="menu">Segundos</span>
  <span>${days}</span>
  <span>:</span>
  <span>${hours}</span>
  <span>:</span>
  <span>${minutes}</span>
  <span>:</span>
  <span>${seconds}</span>
`;
}

function timeReduction() {
  if (timeStart > 0) {
    timeConfigAndShow();
    --timeStart;
  } else {
    timeConfigAndShow();
    clearInterval(setinterval);
  }
}

const setinterval = setInterval(timeReduction, 1000);
