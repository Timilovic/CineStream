const loginForm = document.querySelector('.my-form');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    const loginEmail = document.querySelector('.login-email');
    const loginPassword = document.querySelector('.login-password');
    const loginEmailValue = loginEmail.value;
    const loginPasswordValue = loginPassword.value;
    const storedData = localStorage.getItem('userdata');
    const userData = storedData ? JSON.parse(storedData) : null;

    if (userData) {
        if (loginEmailValue === userData.email && loginPasswordValue === userData.password) {
            alert('Login successful!');
            window.location = 'dashboard.html';
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('No user data found. Please sign up first.');
    }
});