import optionsStorage from './options-storage';

optionsStorage.syncForm('#options-form');

// const callision_var1 = [...document.querySelectorAll('input[type="range"][name^="callision_options"]')];
// const callision_var2 = [...document.querySelectorAll('input[type="number"][name^="callision_options"]')];
// const output = document.querySelector('.color-output');
const token = document.getElementById('token');

function setToken() {
	window.localStorage.setItem('callision_token', token.value);
}

window.addEventListener('load', setToken);
