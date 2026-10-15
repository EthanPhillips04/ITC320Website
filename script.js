const slideImage = document.getElementById("slide-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const playPauseBtn = document.getElementById("play-pause-btn");

const slidePaths = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
];

const slideAlt = [
    "Featured front-end development work",
    "Responsive web development project",
    "Modern front-end development project"
];

let currentSlide = 0;
let isPlaying = true;
let slideTimer = null;

function showSlide(index) {
    if (!slideImage || slidePaths.length === 0) {
        return;
    }

    currentSlide = index;
    slideImage.src = slidePaths[currentSlide];
    slideImage.alt = slideAlt[currentSlide];
}

function nextSlide() {
    showSlide((currentSlide + 1) % slidePaths.length);
}

function prevSlide() {
    showSlide(
        (currentSlide - 1 + slidePaths.length) % slidePaths.length
    );
}

function startSlideShow() {
    stopSlideShow();

    if (!isPlaying || slidePaths.length <= 1) {
        return;
    }

    slideTimer = setInterval(nextSlide, 4000);
}

function stopSlideShow() {
    if (slideTimer !== null) {
        clearInterval(slideTimer);
        slideTimer = null;
    }
}

function updatePlayPauseButton() {
    if (!playPauseBtn) {
        return;
    }

    playPauseBtn.textContent = isPlaying ? "Pause" : "Play";
}

updatePlayPauseButton();
startSlideShow();

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
}

if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;

        updatePlayPauseButton();

        if (isPlaying) {
            startSlideShow();
        } else {
            stopSlideShow();
        }
    });
}

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(function (img) {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    if (!hoverSrc) {
        return;
    }

    img.addEventListener("mouseenter", function () {
        img.src = hoverSrc;
    });
    img.addEventListener("mouseleave", function () {
        img.src = originalSrc;
    });
});