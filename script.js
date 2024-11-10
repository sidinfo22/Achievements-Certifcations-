function toggleMenu() {
    document.querySelector('.orderlist').classList.toggle('show');
}
let currentIndex = 0;

function changeProject(direction) {
    const projects = document.querySelectorAll('.industry-option');
    const totalProjects = projects.length;
    
    // Hide all projects initially
    projects.forEach(project => project.style.display = 'none');
    
    // Update index with wrap-around
    currentIndex = (currentIndex + direction * 2 + totalProjects) % totalProjects;
    
    // Display the current two projects
    projects[currentIndex].style.display = 'block';
    projects[(currentIndex + 1) % totalProjects].style.display = 'block';
}

// Initialize with the first two projects shown
document.addEventListener('DOMContentLoaded', () => changeProject(0));

// JavaScript functions for lightbox functionality
function openLightbox(imageElement) {
    document.getElementById('lightbox-img').src = imageElement.src;
    document.getElementById('lightbox-overlay').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox-overlay').style.display = 'none';
}
