const timeStart = 1 * 24 * 60 * 60; //day * hr * min * sec

const countDown = document.querySelector("div.countDown");

countDown.innerHTML += `
  <span>00</span>
  <span>:</span>
  <span>00</span>
  <span>:</span>
  <span>00</span>
  <span>:</span>
  <span>00</span>
`;

