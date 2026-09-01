// ─── Mobile Menu ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ─── Smooth Scroll ───────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─── Scroll Animations (fade-in on intersection) ─────────
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements and term-cards
document.querySelectorAll('.fade-in, [data-animate]').forEach(el => {
  observer.observe(el);
});

// Make term-cards animate in
document.querySelectorAll('.term-card').forEach(card => {
  card.classList.add('fade-in');
  observer.observe(card);
});

// ─── Active Nav Highlight on Scroll ──────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.classList.remove('nav-active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('nav-active');
      a.innerHTML = '<span class="nav-prompt">&gt;_</span> ' + a.textContent.replace('>_ ', '').trim();
    }
  });
});
