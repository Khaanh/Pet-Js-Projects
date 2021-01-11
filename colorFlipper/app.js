const colors = ["#2ecc71", "#c0392b", "rgba(133, 122, 200)", "rgb(52, 152, 219)", "rgb(241, 196, 15)", "rgb(211, 84, 0)", "rgb(236, 240, 241)", "#f15025", "#e74c3c", "#bdc3c7", "#7f8c8d", "#8e44ad", "#2c3e50"];
const btn = document.querySelector('#js-btn');
const color = document.querySelector('#js-color');
const colorCopied = document.querySelector('#js-copied');

btn.addEventListener('click', () => {
  let randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


color.addEventListener('click', () => {
  colorCopied.innerHTML = color.innerText;
  colorCopied.parentElement.classList.add('is-active')
  
  setTimeout(() =>{
    colorCopied.parentElement.classList.remove('is-active')
  }, 1000)
})
