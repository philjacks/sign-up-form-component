// Form input Selectors
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");

// Error Div Selectors
const firstNameError = document.querySelector(".error1");
const lastNameError = document.querySelector(".error2");
const emailError = document.querySelector(".error3");
const passwordError = document.querySelector(".error4");

// Form Submission
form.addEventListener("submit", (e) => {
  
  validateFirstName(firstName)
  validateLastName(lastName)
  validateEmail(email)
  validatePassword(password)
  
});

// Validate First Name
const validateFirstName = (firstName) => {
  if (firstName.value === "") {
    firstName.classList.add("invalid");
    firstNameError.innerHTML = `First Name cannot be empty`;
  } else {
    firstName.classList.remove("invalid");
    firstNameError.remove();
  }
}

// Validate Last Name
const validateLastName = (lastName) => {
  if (lastName.value === "") {
    lastName.classList.add("invalid");
    lastNameError.innerHTML = `Last Name cannot be empty`;
  } else {
    lastName.classList.remove("invalid");
    lastNameError.remove();
  }
}

// Validate Email
const validateEmail = (emailField) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    email.classList.add("invalid");
    emailError.innerHTML = `Looks like this is not an email`;
    
    return false;

  } else if (!reg.test(emailField.value) == false) {
    email.classList.remove("invalid");
    emailError.remove();
    
    return true;
  }
}

// Validate Password
const validatePassword = (password) => {
  if (password.value === "") {
    password.classList.add("invalid");
    passwordError.innerHTML = `Password cannot be empty`;
  } else {
    password.classList.remove("invalid");
    passwordError.remove();
  }
}











