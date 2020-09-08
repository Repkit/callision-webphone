import optionsStorage from './options-storage';

optionsStorage.syncForm('#options-form');

// A const callision_var1 = [...document.querySelectorAll('input[type="range"][name^="callision_options"]')];
// A const callision_var2 = [...document.querySelectorAll('input[type="number"][name^="callision_options"]')];
// A const output = document.querySelector('.color-output');
const token = document.querySelector('#token');

function setToken() {
	window.localStorage.setItem('callision_token', token.value);
}

window.addEventListener('load', setToken);
