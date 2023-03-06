const { update } = require("lodash");
const _ = require('lodash');


const form = document.querySelector('.feedback-form');

form.addEventListener('input', _.throttle(saveFormData, 500));

function saveFormData(e) {
    e.preventDefault(); 
    let data = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
    
    }

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

document.querySelector('input').value = savedData.email;
document.querySelector('textarea').value = savedData.message;

form.addEventListener('submit', submitFormData);

function submitFormData (e) {
e.preventDefault();
console.log(savedData);
form.reset();
localStorage.clear()
}