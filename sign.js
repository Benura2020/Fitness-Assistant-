const form = document.querySelector('form');
const fullName = document.querySelector('input[type="text"][placeholder="Enter full name"]');
const email = document.querySelector('input[type="text"][placeholder="Enter email address"]');
const phone = document.querySelector('input[placeholder="Enter phone number"]');
const age = document.querySelector('input[placeholder="Enter age"]');
const foodIntake = document.querySelector('select');
const timeConstraints = document.querySelector('input[type="text"][placeholder="Enter time constraints"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let errors = [];

  // Full Name Validation
  if (fullName.value.trim() === '') {
    errors.push('Full name is required');
  } else if (!/^[a-zA-Z ]+$/.test(fullName.value.trim())) {
    errors.push('Full name should only contain alphabets and spaces');
  }

  // Email Validation
  if (email.value.trim() === '') {
    errors.push('Email is required');
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value.trim())) {
    errors.push('Email is invalid');
  }

  // Phone Validation
  if (phone.value.trim() === '') {
    errors.push('Phone number is required');
  } else if (!/^\d{10}$/.test(phone.value.trim())) {
    errors.push('Phone number should be a 10-digit number');
  }

  // Age Validation
  if (age.value.trim() === '') {
    errors.push('Age is required');
  } else if (!/^\d+$/.test(age.value.trim())) {
    errors.push('Age should only contain digits');
  } else if (Number(age.value.trim()) < 18 || Number(age.value.trim()) > 99) {
    errors.push('Age should be between 18 and 99');
  }

  // Food Intake Validation
  if (foodIntake.value === 'Select one from above') {
    errors.push('Food intake type is required');
  }

  // Time Constraints Validation
  if (timeConstraints.value.trim() === '') {
    errors.push('Time constraints are required');
  } else if (!/^[a-zA-Z0-9 ]+$/.test(timeConstraints.value.trim())) {
    errors.push('Time constraints should only contain alphabets, numbers and spaces');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    alert('Dear '+fullName.value.trim()+', Thank you for using FITSENSE, The results will be shown in awhile.Form submitted successfully');
    form.reset();
  }
});
