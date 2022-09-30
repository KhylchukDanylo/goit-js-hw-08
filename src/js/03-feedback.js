const throttle = require('lodash.throttle');

const form = document.querySelector('form');
const btnSubmit = form.elements[2];
const valEmail = form.elements.email;
const valMessage = form.elements.message;

const userData = { email: '', message: '' };

const saveData = throttle(function () {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

form.addEventListener('keyup', onEmail);
function onEmail() {
  userData.email = valEmail.value;
  userData.message = valMessage.value;
}
const sevedUserDate = localStorage.getItem('feedback-form-state');
const parsedUserDate = JSON.parse(sevedUserDate);

valEmail.value = parsedUserDate.email;
valMessage.value = parsedUserDate.message;

btnSubmit.addEventListener('click', onClickSubmit);
function onClickSubmit(e) {
  e.preventDefault();
  console.log(parsedUserDate);
  console.log(userData);

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));

  valEmail.value = ' ';
  valMessage.value = ' ';
}
