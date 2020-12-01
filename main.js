const email = document.getElementById("mail");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
var letters = /^[A-Za-z]+$/;


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

// var invalids = document.getElementsbyId()
var css = `input:invalid {
  border: 2px solid red;
}
textarea:invalid {
  border: 2px solid red;
} `;
var style = document.createElement('style');





function formValidation(){
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
  
  if (firstname.checkValidity() && lastname.checkValidity() && email.checkValidity() && subject.checkValidity() && message.checkValidity()){
    alert("Your response has been recorded! I will get back to you shortly");
    // setTimeout(() => {  alert("Your response has been recorded! I will get back to you shortly"); }, 100)
   
  }else{
    setTimeout(() => {  alert("Please fill out the required fields"); }, 1000)
    
  }
}

// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });

// $('.js-anchor-link').click(function(e){
//   e.preventDefault();
//   var target = $($(this).attr('href'));
//   if(target.length){
//     var scrollTo = target.offset().top;
//     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
//   }
// });

