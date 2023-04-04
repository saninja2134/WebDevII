// Select the form element on the page and assign it to a variable.
const form = document.querySelector('form');

// Find the submit button within the form and assign it to a variable.
const submitButton = form.querySelector('button[type="submit"]');


// For error messages
submitButton.addEventListener('click', (event) => {
  const requiredFields = form.querySelectorAll('[required]');
  let isFormValid = true;

  requiredFields.forEach((field) => {
    if (field.type === 'radio') {
      const radioGroup = form.querySelector(`input[name="${field.name}"]`).parentNode;
      const selectedRadio = form.querySelector(`input[name="${field.name}"]:checked`);

      if (!selectedRadio) {
        isFormValid = false;
        radioGroup.classList.add('error');
      } else {
        radioGroup.classList.remove('error');
      }
    } else {
      if (!field.value) {
        isFormValid = false;
        field.classList.add('error');
      } else {

        field.classList.remove('error');
      }
    }
  });

  if (!isFormValid) {
    event.preventDefault();
    alert('Please fill in all required fields.');
  } else {
    submitForm();
  }
});

// Makes it so that if other is selected from the drop down menu the text box will appear
const improvementsDropdown = document.getElementById("improvements");
const specificInput = document.getElementById("specific");

improvementsDropdown.addEventListener("change", () => {
  if (improvementsDropdown.value === "specific") {
    specificInput.style.display = "block";
  } else {
    specificInput.style.display = "none";
  }
});


// have to set a delayed timer to allow the mailto: function to work
function submitForm() {
  // debugging purposes to see if it went in the function
  console.log("Form submitted!");

  // set a delay of 2 seconds before running the next function
  setTimeout(function() {
    // perform the delayed action here
    form.innerHTML = `
      <h2>Thank you for your valuable feedback!</h2>
      <p>We truly appreciate your time and effort in helping us improve our website. Your insights will contribute to making our site even better. Thanks again!</p>`;
    // Replace the form content with a thank you message.
  }, 2000);
};
