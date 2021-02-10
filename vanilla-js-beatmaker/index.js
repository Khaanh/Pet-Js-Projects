const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads button');
const visaul = document.querySelector('.visual');
const btnPlay = document.querySelector('#js-play');
const btnRecord = document.querySelector('#js-record');
const btnPause = document.querySelector('#js-pauseRecord');
const btnReset = document.querySelector('#js-reset');
const colors = ['#2ecc71', '#d36060', '#c060d3', '#d3d160', '#606bd3', '#60c2d3'];
let recordList = [];

pads.forEach((pad, index) => {
	pad.addEventListener('click', () => {
		sounds[index].currentTime = 0;
		sounds[index].play();
		createBubble(index);
	});
});

const createBubble = (index) => {
	const bubble = document.createElement('div');
	visaul.appendChild(bubble);
	bubble.style.backgroundColor = colors[index];
	bubble.style.animation = 'jump 1s ease';
	bubble.addEventListener('animationend', function () {
		visaul.removeChild(this);
	});
};

//SET UP BUTTONS
btnRecord.addEventListener('click', recordBeat);
btnPlay.addEventListener('click', playBeat);
btnPause.addEventListener('click', pauseRecord);
btnReset.addEventListener('click', resetAll);

// SET UP FUNCTIONS
function playBeat() {
	btnReset.disabled = false;
	btnRecord.classList.add('is-active');

	for (let i = 0; i < recordList.length; i++) {
		setTimeout(() => {
			recordList[i].play();
		}, 500 * i + 1);
	}
}

function recordBeat() {
	btnPause.disabled = false;

	this.classList.add('is-active');

	pads.forEach((pad, index) => {
		pad.addEventListener('click', () => {
			sounds[index].currentTime = 0;
			sounds[index].play();
			recordList.push(sounds[index]);
			createBubble(index);
		});
	});
	// const createBubble = (index) => {
	//   const bubble = document.createElement('div');
	//   visaul.appendChild(bubble);
	//   bubble.style.backgroundColor = colors[index];
	//   bubble.style.animation = 'jump 1s ease';
	//   bubble.addEventListener('animationend', function () {
	//     visaul.removeChild(this);
	//   });
	// };
}

function pauseRecord() {
	btnPlay.disabled = false;

	btnRecord.classList.remove('is-active');
	btnRecord.removeEventListener('click', recordBeat);
}

function resetAll() {
	recordList = [];
	btnPause.disabled = true;
	btnPlay.disabled = true;
	btnReset.disabled = true;

	btnRecord.classList.remove('is-active');
	btnRecord.addEventListener('click', recordBeat);
}
