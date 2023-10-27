const email = document.getElementById('email');
const namee = document.getElementById('name');
const numberr = document.getElementById('number');
const mesage = document.getElementById('message');

function Validation() {
   const validEmail = /^[a-zA-Z0-9.-]+@[a-z]+\.[a-z]{2,6}$/;
if(!validEmail.test(email.value)){
   document.getElementById('email-error').innerText= 'invalid email';
}
else{
   document.getElementById('email-error').innerText='valid';
}

const validName = /^[a-zA-Z0-9.-\s]+/;
if(!validName.test(namee.value)){
   document.getElementById('name-error').innerText= 'invalid name';
}
else{
   document.getElementById('name-error').innerText='valid';
}

const validNumber = /^\+212+[6 | 7]+[0-9]{8}$/;
if(!validNumber.test(numberr.value)){
   document.getElementById('number-error').innerText= 'invalid number';
}
else{
   document.getElementById('number-error').innerText='valid';
}


}
