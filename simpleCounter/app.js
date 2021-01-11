let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    let btnType = e.currentTarget.classList;

    if (btnType.contains('decrease')) {
      count--;
    } else if (btnType.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;

    if (count > 0) {
      value.style.color = '#2ecc71';
    } else if (count < 0) {
      value.style.color = '#c0392b';
    } else {
      value.style.color = '#2c3e50';
    }
  })
})

/*
В будущем сделать инкремент/декремент по нажатию клавиши:
+; 
-; 
ESC / 0 - сброс.
 */