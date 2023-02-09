// Main page:

function preOrderButton() {
  var button = document.getElementById("pre-order-main-button");
  button.addEventListener("click", function() {
    window.location.href = "pre-order-form.html";
  });
}
document.addEventListener("DOMContentLoaded", preOrderButton);

// Pre-order page:

const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const machineType = form.elements.machineType.value;
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const email = form.elements.email.value;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (machineType === "") {
    alert("Please select any Time Machine");
    return;
  }

  if (firstName === "") {
    alert("Please enter your First Name");
    return;
  }

  if (lastName === "") {
    alert("Please enter your Last Name");
    return;
  }

  if (email === "") {
    alert("Please enter your Email address");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid Email address");
    return;
  } else {
    // save form values in local storage
    localStorage.setItem('machineType', machineType);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);

    window.location.href = 'confirmation.html';
  }

});


// Confirmation page:
