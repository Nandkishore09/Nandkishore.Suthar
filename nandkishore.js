// year update
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// contact form demo
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  alert('Thanks! Your message was captured (demo). Replace handleSubmit to POST to a server.');
  form.reset();
  return false;
}

// active nav highlight on scroll
const navLinks = document.querySelectorAll('.main-nav .nav-link');
const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href')));
function updateActive() {
  const offset = window.scrollY + 120;
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    if (!sec) continue;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    navLinks[i].classList.toggle('active', offset >= top && offset < bottom);
  }
}
window.addEventListener('scroll', updateActive);
updateActive();

// -----------------------------
// About section Read More
// -----------------------------
const aboutBtn = document.getElementById("readMoreBtn");
const aboutMore = document.getElementById("moreText");
if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    const isVisible = aboutMore.style.display === "inline";
    aboutMore.style.display = isVisible ? "none" : "inline";
    aboutBtn.textContent = isVisible ? "Read More" : "Read Less";
  });
}

// -----------------------------
// Skills section Read More buttons
// -----------------------------
document.querySelectorAll(".service-card").forEach(card => {
  const btn = card.querySelector(".readMoreBtn");
  const more = card.querySelector(".moreText");

  if (btn && more) {
    btn.addEventListener("click", () => {
      const isVisible = more.style.display === "inline";
      more.style.display = isVisible ? "none" : "inline";
      btn.textContent = isVisible ? "Read More" : "Read Less";
    });
  }
});
