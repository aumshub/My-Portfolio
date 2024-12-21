function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  }

  function scrollAnimation() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#wrapper'),
        smooth: true
    });
}

function loaderAnimation(){

  let loader = document.querySelector("#loader");

  setTimeout(() => {
      loader.style.top = "-100%"
  }, 3500);

}


 // ScrollReveal animations for all section

//  ScrollReveal().reveal('nav', {
//   duration: 1000,
//   origin: 'bottom',
//   distance: '50px',
//   easing: 'ease-in-out',
//   reset: true
// });
 ScrollReveal().reveal('#profile', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true,
});

ScrollReveal().reveal('#about', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('#experience', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('#projects', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('#contact', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});
// ScrollReveal().reveal('div', {
//   duration: 1000,
//   origin: 'bottom',
//   distance: '50px',
//   easing: 'ease-in-out',
//   reset: true
// });

loaderAnimation()
// scrollAnimation()
