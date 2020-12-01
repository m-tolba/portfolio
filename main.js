// initializing variables
const email = document.getElementById("mail");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
var letters = /^[A-Za-z]+$/;

//event listeners to determine valid inputs for the contact form
firstname.addEventListener("input", function (event) {
  if (firstname.value != "" && firstname.value.match(letters)){
    firstname.setCustomValidity("");
    firstname.style.border = "1px solid lightgray";
  } else {
    firstname.setCustomValidity("not a valid input");
    firstname.style.border = "2px solid red"
  }
});

lastname.addEventListener("input", function (event) {
  if (lastname.value != "" && lastname.value.match(letters)){
    lastname.setCustomValidity("");
    lastname.style.border = "1px solid lightgray";
  } else {
    lastname.setCustomValidity("not a valid input");
    lastname.style.border = "2px solid red"
  }
});

subject.addEventListener("input", function (event) {
  if (subject.value != "" && subject.value.match(letters)){
    subject.setCustomValidity("");
    subject.style.border = "1px solid lightgray";
  } else {
    subject.setCustomValidity("not a valid input");
    subject.style.border = "2px solid red"
  }
});

message.addEventListener("input", function (event) {
  if (message.value != "" && message.value.match(letters)){
    message.setCustomValidity("");
    message.style.border = "1px solid lightgray";
  } else {
    message.setCustomValidity("not a valid input");
    message.style.border = "2px solid red"

  }
});

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch || email.value=="") {
    email.setCustomValidity("not a valid e-mail address");
    email.style.border = "2px solid red"
  } else {
    email.setCustomValidity("");
    email.style.border = "1px solid lightgray";

  }
});

// variables for changing css of invalid inputs
var css = `input:invalid {
  border: 2px solid red;
}
textarea:invalid {
  border: 2px solid red;
} `;
var style = document.createElement('style');


//when form is submitted, either accepts or declines form based on data validity
function formValidation(){
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
  
  if (firstname.checkValidity() && lastname.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()){
    alert("Your response has been recorded! I will get back to you shortly");   
  }else{
    setTimeout(() => {  alert("Please fill out the required fields"); }, 1000)
    
  }
}
