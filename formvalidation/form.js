const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(emailVal) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(emailVal).toLowerCase());
}

function checkUsername() {
  const val = username.value.trim();
  if (val === '') {
    showError(username, 'Username is required');
    return false;
  } else if (val.length < 3) {
    showError(username, 'Username must be at least 3 characters');
    return false;
  } else {
    showSuccess(username);
    return true;
  }
}

function checkEmail() {
  const val = email.value.trim();
  if (val === '') {
    showError(email, 'Email is required');
    return false;
  } else if (!isValidEmail(val)) {
    showError(email, 'Please enter a valid email address');
    return false;
  } else {
    showSuccess(email);
    return true;
  }
}

function checkPassword() {
  const val = password.value.trim();
  if (val === '') {
    showError(password, 'Password is required');
    return false;
  } else if (val.length < 8) {
    showError(password, 'Password must be at least 8 characters');
    return false;
  } else {
    showSuccess(password);
    return true;
  }
}

function checkConfirmPassword() {
  const passVal = password.value.trim();
  const confirmVal = confirmPassword.value.trim();

  if (confirmVal === '') {
    showError(confirmPassword, 'Please confirm your password');
    return false;
  } else if (confirmVal !== passVal) {
    showError(confirmPassword, 'Passwords do not match');
    return false;
  } else {
    showSuccess(confirmPassword);
    return true;
  }
}

username.addEventListener('input', checkUsername);
email.addEventListener('input', checkEmail);
password.addEventListener('input', () => {
  checkPassword();
  if (confirmPassword.value.length > 0) checkConfirmPassword();
});
confirmPassword.addEventListener('input', checkConfirmPassword);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isUsernameValid = checkUsername();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isConfirmPasswordValid = checkConfirmPassword();

  const isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  if (isFormValid) {
    alert('Form submitted successfully!');
    form.reset();
    document.querySelectorAll('.form-control').forEach(el => el.classList.remove('success'));
  }
});