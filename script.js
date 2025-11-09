// Intersection Observer for fade-in scroll
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
// Auto rotate videos every 5 seconds
const hotelVideos = document.querySelectorAll(".hotel-video");
let currentVideo = 0;

setInterval(() => {
    hotelVideos[currentVideo].classList.remove("active");
    currentVideo = (currentVideo + 1) % hotelVideos.length;
    hotelVideos[currentVideo].classList.add("active");
}, 5000);
