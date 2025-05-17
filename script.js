// VAlute - Advanced JavaScript // Include this file in all HTML pages

document.addEventListener("DOMContentLoaded"), () => { // Smooth transition between pages const anchors = document.querySelectorAll('a'); anchors.forEach(anchor => { anchor.addEventListener('click', (e) => { if (anchor.href && anchor.target !== '_blank' && anchor.getAttribute('href').charAt(0) !== '#') { e.preventDefault(); document.body.classList.add('fade-out'); setTimeout(() 
// => { window.location.href = anchor.href; }, 300); } }); });

// Animate page load document.body.classList.add('fade-in');

// GSAP scroll reveal animation gsap.utils.toArray(".feature-item, .section, .card").forEach((el) => { gsap.from(el, { opacity: 0, y: 50, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none none" } }); });

// Real-time mock data updates for market (simulate live updates) const prices = document.querySelectorAll('.live-price'); setInterval(() => { prices.forEach(price => { let current = parseFloat(price.textContent.replace('$', '')); let delta = (Math.random() - 0.5) * 2; // -1 to +1 let updated = Math.max(0, (current + delta)).toFixed(2); price.textContent = $${updated}; }); }, 3000);

// Toggle notification panel const bell = document.querySelector(".notification-icon"); const panel = document.querySelector(".notification-panel"); if (bell && panel) { bell.addEventListener("click", () => { panel.classList.toggle("active"); }); }

// Simple search filtering (portfolio or transactions) const searchInput = document.getElementById("search-input"); if (searchInput) { searchInput.addEventListener("input", () => { const query = searchInput.value.toLowerCase(); document.querySelectorAll(".searchable").forEach(item => { item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none"; }); }); } });

// Fade-in/out animation CSS helpers (add to your CSS file): // body.fade-in { opacity: 1; transition: opacity 0.3s ease-in; } // body.fade-out { opacity: 0; transition: opacity 0.3s ease-out; )}
// };