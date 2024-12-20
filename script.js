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

scrollAnimation()