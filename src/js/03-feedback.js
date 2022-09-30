const throttle = require('lodash.throttle');

const form = document.querySelector('form');
const btnSubmit = form.elements[2];
const valEmail = form.elements.email;
const valMessage = form.elements.message;

const userData = { email: '', message: '' };
userData.email = valEmail.value;
userData.message = valMessage.value;
const saveData = throttle(function () {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

form.addEventListener('input', onDate);
function onDate() {
  userData.email = valEmail.value;
  userData.message = valMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
const sevedUserDate = localStorage.getItem('feedback-form-state');
const parsedUserDate = JSON.parse(sevedUserDate);

valEmail.value = parsedUserDate.email;
valMessage.value = parsedUserDate.message;

btnSubmit.addEventListener('click', onClickSubmit);
function onClickSubmit(e) {
  e.preventDefault();
  console.log(parsedUserDate);

  valEmail.value = ' ';
  valMessage.value = ' ';
  localStorage.clear();
}
