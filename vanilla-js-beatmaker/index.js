window.addEventListener('load', ()=> {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visaul = document.querySelector('.visual');
  const playAgain = document.querySelector('.play');
  const colors = [
    "#2ecc71",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  let list = [];


  pads.forEach((pad, index) => {
    pad.addEventListener('click', ()=> {
      sounds[index].currentTime = 0;
      sounds[index].play();
      list.push(sounds[index]);
      createBubble(index);

      console.log(list);
    })

    const createBubble = (index)=> {
      const bubble = document.createElement('div');
      visaul.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = 'jump 1s ease';
      bubble.addEventListener('animationend', function() {
        visaul.removeChild(this)
      });
    }
  })

  playAgain.addEventListener('click', ()=> {
    let i = 0;

    while (i < list.length) {
      console.log(list[i]);
      list[i].play();
      i++;
    }
  });
  
})
