document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('loginError');
  
    // Basic validation
    if (email === '' || password === '') {
      errorMessage.innerText = 'All fields are required!';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      alert('Login Successful!');
    }
  });
  
  document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('signUpError');
  
    // Basic validation
    if (email === '' || password === '' || confirmPassword === '') {
      errorMessage.innerText = 'All fields are required!';
      errorMessage.style.display = 'block';
    } else if (password !== confirmPassword) {
      errorMessage.innerText = 'Passwords do not match!';
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      alert('Sign Up Successful!');
    }
  });
  