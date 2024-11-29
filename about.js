let currentIndex = 0;

function moveSlide(direction) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const images = document.querySelectorAll('.slider-wrapper img');
    const imageWidth = images[0].offsetWidth + 10; // Width + margin-right
    const maxIndex = images.length - Math.floor(sliderWrapper.offsetParent.offsetWidth / imageWidth);

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    sliderWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}
