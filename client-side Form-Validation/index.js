const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const button = document.querySelector('#js-button');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInput();
});

function checkInput() {
	let usernameValue = username.value.trim();
	let emailValue = email.value.trim();
	let passwordValue = password.value.trim();
	let password2Value = password2.value.trim();
	let flagValid = false;

	if (usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		flagValid = false;
	} else {
		setSuccessFor(username);
		flagValid = true;
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		flagValid = true;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		flagValid = false;
	} else {
		setSuccessFor(email);
		flagValid = false;
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		flagValid = false;
	} else {
		setSuccessFor(password);
		flagValid = true;
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
		flagValid = false;
	} else if (password2Value != passwordValue) {
		setErrorFor(password2, 'Passwords does not match');
		flagValid = false;
	} else {
		setSuccessFor(password2);
		flagValid = true;
	}

	console.log(flagValid);

	if (flagValid) {
		form.submit();
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	formControl.classList.add('error');
	small.textContent = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
	formControl.classList.add('success');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
