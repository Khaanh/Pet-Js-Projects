// let audio = document.querySelector('#audio');
// let logo = document.querySelector('#logo');
// let context = new AudioContext();

let audio, context, analyser, src, array, logo;

logo = document.querySelector('#logo');
audio = document.querySelector('#audio');
// let analyser, src;

window.addEventListener('click', function () {
	if (!context) {
		preperation();
	}

	if (audio.paused) {
		audio.play();
		loop();
	} else {
		audio.pause();
	}
});

function preperation() {
	context = new AudioContext();
	analyser = context.createAnalyser();
	src = context.createMediaElementSource(audio);
	src.connect(analyser);
	analyser.connect(context.destination);
	loop();
}

function loop() {
	if (!audio.paused) {
		window.requestAnimationFrame(loop);
	}

	array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(array);

	logo.style.minHeight = array[40] + 'px';
	logo.style.width = array[40] + 'px';
}
