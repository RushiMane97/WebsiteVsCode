document.addEventListener("DOMContentLoaded", function() {
    // Background Image Change
    const images = ['imageE.jpg', 'imageB.jpg', 'imageF.jpg', 'imageG.jpg'];
    let currentIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 2000);
    changeBackground(); // Call on load

    // Modal and Form Handling
    const loginSection = document.getElementById('loginSection');
    const businessSection = document.getElementById('businessSection');
    const loginBtn = document.getElementById('loginBtn');
    const listBusinessBtn = document.getElementById('listBusinessBtn');
    const goBackBtn = document.getElementById('goBackBtn');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.style.display = 'block';
        businessSection.style.display = 'none';
    });

    listBusinessBtn.addEventListener('click', (e) => {
        e.preventDefault();
        businessSection.style.display = 'block';
        loginSection.style.display = 'none';
    });

    goBackBtn.addEventListener('click', () => {
        businessSection.style.display = 'none'; // Hide business form
        loginSection.style.display = 'none'; // Also hide login form
    });
});
