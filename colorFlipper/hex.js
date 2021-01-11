const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#js-btn');
const color = document.querySelector('#js-color');

btn.addEventListener('click', () => {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomHex()];
  }

  document.body.style.backgroundColor = hexColor;
  color.innerHTML = hexColor;
})

function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}
