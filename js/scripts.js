// Checker
$(document).ready(function() {
  console.log("I'm working!");
});

// Scroll
window.addEventListener('scroll', () => {
  let screenTop = window.scrollY > 30;
  const topNav = document.getElementById('nav');

  if (screenTop) {
    topNav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
