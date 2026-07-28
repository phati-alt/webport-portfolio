// ============ Theme Toggle ============
// Dark is the default (Linear ships no light mode); "light" is an opt-in override.
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// ============ Sticky Header ============
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

// ============ Scroll Progress Bar ============
const progressBar = document.getElementById('progressBar');
function updateProgressBar() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}
window.addEventListener('scroll', updateProgressBar, { passive: true });
window.addEventListener('resize', updateProgressBar);
updateProgressBar();

// ============ Glow Border (mouse-tracking card hover) ============
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest('.glow-border');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
});

// ============ Mobile Nav ============
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-active');
  mainNav.classList.toggle('is-open');
});

mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-active');
    mainNav.classList.remove('is-open');
  });
});

// ============ Active Nav Link on Scroll ============
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active-link', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(sec => navObserver.observe(sec));

// ============ Scroll Reveal ============
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ============ Work Grid (rendered from js/projects-data.js) ============
const workGrid = document.getElementById('workGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderWorkGrid() {
  if (!workGrid || typeof PROJECTS === 'undefined') return;

  const lang = getLang();
  const activeFilter = document.querySelector('.filter-btn.is-active')?.getAttribute('data-filter') || 'all';

  workGrid.innerHTML = PROJECTS.map(project => {
    const hidden = activeFilter !== 'all' && project.category !== activeFilter ? ' is-hidden' : '';
    const thumbClass = project.image ? 'has-image' : `thumb-${(project.category === 'mobile' ? 1 : project.category === 'web' ? 2 : 3)}`;
    const thumbInner = project.image
      ? `<img class="work-thumb-img" src="${project.image}" alt="${project.title[lang]}" loading="lazy">`
      : '';
    const tagKey = `work.filter${project.category === 'mobile' ? 'Mobile' : project.category === 'web' ? 'Web' : 'DesignSystem'}`;
    return `
      <article class="work-card glow-border${hidden}" data-category="${project.category}">
        <div class="work-thumb ${thumbClass}">
          ${thumbInner}
          <span class="work-tag">${translations[lang][tagKey]}</span>
        </div>
        <div class="work-body">
          <h3>${project.title[lang]}</h3>
          <p>${project.desc[lang]}</p>
          <a href="${project.link}" class="work-link">${translations[lang]['work.viewCaseStudy']}</a>
        </div>
      </article>`;
  }).join('');
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderWorkGrid();
  });
});

window.addEventListener('langchange', renderWorkGrid);
renderWorkGrid();

// ============ Contact Form (demo only, no backend) ============
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = translations[getLang()]['form.successNote'];
    contactForm.reset();
    setTimeout(() => { formNote.textContent = ''; }, 6000);
  });
}

// ============ Resume Button (placeholder) ============
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(translations[getLang()]['misc.resumeAlert']);
  });
}

// ============ Footer Year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Cursor Dot ============
const cursorDot = document.getElementById('cursorDot');
if (window.matchMedia('(min-width: 1024px)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.opacity = '1';
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.style.transform = 'translate(-50%, -50%) scale(2.5)');
    el.addEventListener('mouseleave', () => cursorDot.style.transform = 'translate(-50%, -50%) scale(1)');
  });
}
