const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('home-ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


const navLinks = document.querySelectorAll('#home-ul a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);


document.querySelectorAll('.navitem, .portfolio-items, .skills-item, .about-items').forEach((section) => {
  observer.observe(section);
});


window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});