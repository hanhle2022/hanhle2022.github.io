// Toggle dark/light mode and remember choice
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

// Pick a random image from the images folder on each page load
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
const randomImg = images[Math.floor(Math.random() * images.length)];
document.getElementById('randomImage').src = `images/${randomImg}`;

// Reveal cards when scrolled into view
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Like button functionality
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = Number(localStorage.getItem('likeCount')) || 0;
likeCount.textContent = count;
likeBtn.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
    localStorage.setItem('likeCount', count);
});
