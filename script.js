const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');



// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_users_per_minute_e9rg-${color}.svg`;
  image2.src = `img/undraw_undraw_completion_iqwr_-1-_man2-${color}.svg`;
  image3.src = `img/undraw_completed_m9ci-${color}.svg`;
}

// change the elements of the theme automatically
function toggleElements (isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' :'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleElements(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleElements(false);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
// get the mode from local storage
const courentTheme = localStorage.getItem('theme');
if (courentTheme) {
    document.documentElement.setAttribute('data-theme', courentTheme);
    if (courentTheme == 'dark') {
        toggleSwitch.checked = true;
        toggleElements(true);
    }
}
