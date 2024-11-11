// sign-up form validation and localStorage save
const form = document.getElementById('form');
const fullName = document.getElementById('all-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const enumb = document.querySelector('.num');
const pss = document.querySelector('.pss');
const fpassword = document.getElementById('firstpassword');
const cpassword = document.getElementById('conpassword');
const regbtn = document.getElementById('regbtn');
const ename = document.querySelector('.name');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const eforemail = document.querySelector('.error-email');
const epass = document.querySelector('.epass');

regbtn.addEventListener('click', function (event) {
    event.preventDefault();
    try {
        const emailValue = email.value;
        const passwordValue = fpassword.value;
        const confirmPasswordValue = cpassword.value;
    
        const validEmail = emailPattern.test(emailValue);
        const passwordsMatch = passwordValue === confirmPasswordValue;
        let isValid = true;
    
        // Reset previous error messages and styles
        fullName.textContent = '';
        eforemail.textContent = '';
        epass.textContent = '';
        ename.textContent = '';
        enumb.textContent = '';
        pss.textContent = '';
        email.style.borderColor = '';
        phone.style.borderColor = '';
        fpassword.style.borderColor = '';
        cpassword.style.borderColor = '';
    
        // Validate email
        if (!validEmail) {
            eforemail.textContent = 'Input a valid email';
            email.style.borderColor = 'red';
            isValid = false;
        }
    
        // Validate passwords match
        if (!passwordsMatch) {
            epass.textContent = 'Password does not match';
            fpassword.style.borderColor = 'red';
            cpassword.style.borderColor = 'red';
            isValid = false;
        }
    
        // Validate full name
        if (fullName.value.trim() === "") {
            ename.textContent = 'Input your name';
            fullName.style.borderColor = 'red';
            isValid = false;
        }
        
    
        // Validate email is not empty
        if (email.value.trim() === "") {
            email.style.borderColor = 'red';
            eforemail.textContent = 'Input your email';
            isValid = false;
        }
    
        // Validate phone number
        if (phone.value.trim() === "") {
            phone.style.borderColor = 'red';
            enumb.textContent = 'Input your phone number';
            isValid = false;
        }
    
        // Validate password fields
        if (fpassword.value.trim() === "") {
            fpassword.style.borderColor = 'red';
            pss.textContent = 'Input your password';
            isValid = false;
        }
        if (cpassword.value.trim() === "") {
            cpassword.style.borderColor = 'red';
            epass.textContent = 'Confirm your password';
            isValid = false;
        }
    
        setTimeout(() => {
            fullName.textContent = '';
            eforemail.textContent = '';
            epass.textContent = '';
            ename.textContent = '';
            enumb.textContent = '';
            pss.textContent = '';
            email.style.borderColor = '';
            phone.style.borderColor = '';
            fpassword.style.borderColor = '';
            cpassword.style.borderColor = '';
        }, 1000); 
    
        // Save data if all fields are valid
        if (isValid) {
            const formData = {
                name: fullName.value,
                email: email.value,
                phone: phone.value,
                password: cpassword.value
            };
            localStorage.setItem('userdata', JSON.stringify(formData));
    
            alert('Sign-up successful');
            window.location = 'login.html';
    
            form.reset();
        }
    
    } catch (error) {
        
    }
    finally{

    }
});

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

