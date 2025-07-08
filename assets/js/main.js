const toggle = document.getElementById('darkModeToggle');
//  Return button to the top
const scrollTopBtn = document.getElementById("scrollTopBtn");

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Switch the icon between the moon and the sun
    if (toggle.classList.contains('bxs-moon-star')) {
        toggle.classList.remove('bxs-moon-star');
        toggle.classList.add('bxs-sun');
    } else {
        toggle.classList.remove('bxs-sun');
        toggle.classList.add('bxs-moon-star');
    }
});

// Show the button when the user passes down 300px
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// When you press the button, passes up the top of the page
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ........................

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("welcomePopup");

    // Show the window immediately and then hide it after 4 seconds
    setTimeout(() => {
        popup.classList.add("hide");
    }, 4000); // 4000 = 4 seconds
});

// The Opening and Pollen button on the media and the hemolis screens
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});






