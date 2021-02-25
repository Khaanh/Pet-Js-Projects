let body = document.querySelector('body');
let num = 32;
let array = new Uint8Array(num * 2);
let width = 10;
let context, logo, myElements, analyser, src, height;

window.onclick = function () {
	if (context) return;

	body.querySelector('h1').remove();

	for (let i = 0; i < num; i++) {
		logo = document.createElement('div');
		logo.className = 'logo';
		logo.style.backgroundColor = 'red';
		logo.style.minWidth = width + 'px';
		body.appendChild(logo);
	}

	myElements = document.querySelector('.logo');
	context = new AudioContext();
	analyser = context.createAnalyser();

	navigator.mediaDevices
		.getUserMedia({
			audio: true,
		})
		.then((stream) => {
			src = context.createMediaStreamSource(stream);
			src.connect(analyser);
			loop();
		})
		.catch((error) => {
			alert(error + '\r\n Отлконено. Страница будет обновлена!');
			location.reload();
		});
};

function loop() {
	window.requestAnimationFrame(loop);
	analyser.getByteFrequencyData(array);

	for (let i = 0; i < num; i++) {
		height = array[i + num];
		myElements[i].style.minHeight = height + 'px';
		myElements[i].style.opacity = 0.008 * height;
	}
}
