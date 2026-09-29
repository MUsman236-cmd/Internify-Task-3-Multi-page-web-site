const form = document.getElementById('contact-form');

if (form) {
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('success-message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        if (!name || name.value.trim().length < 3) {
            nameError.textContent = 'Name must be at least 3 characters long.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        if (!email || !emailPattern.test(email.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!message || message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            successMessage.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });
}

const menuButton = document.getElementById('menu-button');
const navLink = document.querySelector('.nav-link');

if (menuButton && navLink) {
    menuButton.addEventListener('click', function () {
        navLink.classList.toggle('show');
    });
}

const themeButton = document.getElementById('theme-button');
const body = document.body;

if (themeButton) {
    themeButton.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        themeButton.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
}
