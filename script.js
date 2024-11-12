function toggleMenu() {
    document.querySelector('.orderlist').classList.toggle('show');
}
let currentIndex = 0;


// JavaScript functions for lightbox functionality
function openLightbox(imageElement) {
    document.getElementById('lightbox-img').src = imageElement.src;
    document.getElementById('lightbox-overlay').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox-overlay').style.display = 'none';
}
function openLightbox(element) {
    var lightboxOverlay = document.getElementById("lightbox-overlay");
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxOverlay.style.display = "flex";
    lightboxImg.src = element.src; // Set the source of the lightbox to the clicked image
}

function closeLightbox() {
    var lightboxOverlay = document.getElementById("lightbox-overlay");
    lightboxOverlay.style.display = "none";
}
let currentProject = 0;
const projects = document.querySelectorAll('.industry-option');
const totalProjects = projects.length;

// Function to set the active project
function setActiveProject(index) {
    projects.forEach((project, i) => {
        project.classList.remove('active');
        if (i === index) {
            project.classList.add('active');
        }
    });
}

// Initial display
setActiveProject(currentProject);

// Desktop: Next and Previous buttons
function changeProject(direction) {
    currentProject = (currentProject + direction + totalProjects) % totalProjects;
    setActiveProject(currentProject);
}

// Mobile: Swipe functionality
let startX = 0;

document.querySelector('.project-gallery').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.project-gallery').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        changeProject(1); // Swipe left
    } else if (endX - startX > 50) {
        changeProject(-1); // Swipe right
    }
});


// updated desktop carousel 
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".industry-option");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let currentIndex = 1; // Start with the second project in the center
    const intervalTime = 10000; // Time in milliseconds

    function updateCarousel() {
        projects.forEach((project, index) => {
            project.classList.remove("active");
            if (index === currentIndex) {
                project.classList.add("active");
            }
        });
        const offset = -currentIndex * (projects[0].offsetWidth + 20); // Adjust for project width and margin
        document.querySelector(".industry-carousel").style.transform = `translateX(calc(50% + ${offset}px))`;
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateCarousel();
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateCarousel();
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", nextProject);
    prevBtn.addEventListener("click", prevProject);

    // Auto-scroll every interval
    setInterval(nextProject, intervalTime);
});
