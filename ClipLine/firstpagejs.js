// Background Image Change
const images = ['imageE.jpg', 'imageB.jpg', 'imageF.jpg', 'imageG.jpg'];
let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 1500);
window.onload = changeBackground;

// Modal and Form Handling
const modals = {
    login: document.getElementById('loginModal'),
    signup: document.getElementById('signupModal'),
    business: document.getElementById('businessModal')
};

const buttons = {
    login: document.getElementById('loginBtn'),
    showSignup: document.getElementById('showSignup'),
    listBusiness: document.querySelector('a[href="#"]:nth-child(2)'),
    goBack: document.getElementById('goBackBtn')
};

buttons.login.addEventListener('click', () => toggleModal('login'));
buttons.showSignup.addEventListener('click', () => {
    toggleModal('login', false);
    toggleModal('signup');
});
buttons.listBusiness.addEventListener('click', () => toggleModal('business'));

window.addEventListener('click', (event) => {
    for (let modal in modals) {
        if (event.target === modals[modal]) {
            toggleModal(modal, false);
        }
    }
});

// Toggle modal visibility
function toggleModal(modalName, show = true) {
    modals[modalName].style.display = show ? 'block' : 'none';
}

// Form Submission Handling
const forms = {
    login: document.getElementById('loginForm'),
    signup: document.getElementById('signupForm'),
    business: document.getElementById('businessForm')
};

forms.login.addEventListener('submit', handleSubmit('Login successful!', 'login'));
forms.signup.addEventListener('submit', handleSubmit('Signup successful!', 'signup'));
forms.business.addEventListener('submit', handleSubmit('Business listed successfully!', 'business'));

// Handle form submission
function handleSubmit(successMessage, modalName) {
    return (event) => {
        event.preventDefault(); // Prevent default form submission
        alert(successMessage); // Display success message
        toggleModal(modalName, false); // Close modal
    };
}

// Additional Functionality for Back Button
buttons.goBack.addEventListener('click', () => {
    toggleModal('business', false); // Hide business form
});
