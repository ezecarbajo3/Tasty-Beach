// 🔥 Smooth scroll mejorado + offset navbar

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    const navbar = document.querySelector(".navbar");

    if (!target) return;

    const offset = navbar ? navbar.offsetHeight + 20 : 100;
    const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth"
    });
  });
});


// 🔥 Animación reveal (más pro visualmente)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".card, .gallery-item, .section-heading").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// 🔥 Navbar shadow dinámico al scrollear

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 25px 60px rgba(0,0,0,0.35)";
  } else {
    navbar.style.boxShadow = "0 18px 45px rgba(0,0,0,0.25)";
  }
});


// 🔥 Hover micro-interactions en botones flotantes

document.querySelectorAll(".whatsapp-float, .maps-float").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
  });
});
