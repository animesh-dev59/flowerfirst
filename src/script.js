// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
}); 

// Modal Functionality
const modal = document.getElementById('fruit-modal');
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}); 

// Countdown Timer Logic
function startCountdown() {
  let seconds = 60;
  setInterval(() => {
    seconds--;
    if (seconds < 0) seconds = 59;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

