/*background adjust*/
window.addEventListener('DOMContentLoaded', () => {
    const bg = document.querySelector('.parallax-background');
    if (window.innerWidth >= 768) {
        bg.style.backgroundImage = "url('assets/img/amg-01.jpg')";
    } else {
        bg.style.backgroundImage = "url('assets/img/amg-01.jpg')";
    }
});

function updateBackground() {
  const bg3 = document.querySelector('.section3-bg');
  if (window.innerWidth >= 768) {
    bg3.style.backgroundImage = "url('assets/img/amg-02.jpg')";
  } else {
    bg3.style.backgroundImage = "url('assets/img/amg-02.jpg')";
  }
}

window.addEventListener('load', () => {
  updateBackground();
  window.addEventListener('resize', updateBackground);
});

/*
const parallax = document.querySelector('.parallax-background');
document.addEventListener('mousemove', (e) => {
const x = (e.clientX / window.innerWidth) - 0.5;
const y = (e.clientY / window.innerHeight) - 0.5;

parallax.style.transform = `translate(${x * 70}px, ${y * 70}px)`;
});
*/

/*transition animation*/
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);

  setTimeout(() => {
    document.body.classList.add('show-content');
  }, 2000);

  setTimeout(() => {
    document.body.classList.add('hide-content');
  }, 6000);
});

/*fade in animation*/
document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); /*1 time animation*/
      }
    });
  }, {
    threshold: 0.3, /*when 30% is visible*/
  });

  fadeSections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const submenuParents = document.querySelectorAll(".has-submenu");

  submenuParents.forEach((parent) => {
    parent.addEventListener("click", (e) => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();

        submenuParents.forEach((el) => {
          if (el !== parent) el.classList.remove("active");
        });

        parent.classList.toggle("active");
      }
    });
  });

  document.addEventListener("click", () => {
    submenuParents.forEach((parent) => {
      parent.classList.remove("active");
    });
  });
});