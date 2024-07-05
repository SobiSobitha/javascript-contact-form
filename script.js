document.getElementById('contact-us-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Regular expressions
  const phoneRegex = /^\+94\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Error elements
  const nameError = document.getElementById('name-error');
  const addressError = document.getElementById('address-error');
  const phoneError = document.getElementById('phone-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Clear previous errors
  nameError.textContent = '';
  addressError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Validations
  let valid = true;

  if (!name) {
      nameError.textContent = 'Name is required';
      valid = false;
  }

  if (!address) {
      addressError.textContent = 'Address is required';
      valid = false;
  }

  if (!phone) {
      phoneError.textContent = 'Phone number must start with +94 and be followed by exactly 9 digits';
      valid = false;
  }
  

  if (!email) {
      emailError.textContent = 'Email is required';
      valid = false;
  } else if (!emailRegex.test(email)) {
      emailError.textContent = 'Invalid email format';
      valid = false;
  }

  if (message.length < 10) {
      messageError.textContent = 'Message must be at least 10 characters long';
      valid = false;
  }

  if (valid) {
      const contactData = {
          name,
          address,
          phone,
          email,
          message
      };
      localStorage.setItem('contactData', JSON.stringify(contactData));
      alert('Success! Your message has been sent.');
      document.getElementById('modal').style.display = 'none';
  }
});