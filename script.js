// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      valid = false;
    } else {
      input.classList.remove('error');
    }
  });
  if (valid) {
    alert('Form Submitted!');
    form.reset();
    dataLayer.push({ event: 'form_submitted', form_name: 'contactForm' });
  }
});

// Pricing Toggle
const toggleSwitch = document.getElementById('pricing-toggle');
toggleSwitch?.addEventListener('change', function () {
  document.body.classList.toggle('yearly-pricing', this.checked);
  dataLayer.push({ event: 'pricing_toggle', mode: this.checked ? 'Yearly' : 'Monthly' });
});

// Filter Portfolio
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.portfolio-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    cards.forEach(card => {
      card.style.display = category === 'all' || card.dataset.category === category ? 'block' : 'none';
    });
    dataLayer.push({ event: 'portfolio_filter', category });
  });
});

// Lazy Load Images
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

// Modal Popup
const modal = document.getElementById("popup-modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn?.addEventListener("click", () => {
  modal.style.display = "block";
  dataLayer.push({ event: 'modal_opened' });
});

closeModalBtn?.addEventListener("click", () => {
  modal.style.display = "none";
  dataLayer.push({ event: 'modal_closed' });
});

// Cookie Consent
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookies = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookiesAccepted')) {
  cookieBanner.style.display = 'block';
}

acceptCookies?.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookieBanner.style.display = 'none';
  dataLayer.push({ event: 'cookie_accepted' });
});
