// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const elements = document.querySelectorAll('.container');

    elements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('animate', 'show');
        }
    });
}

// Listen for scroll events and trigger the animation
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

// Initial check on page load
window.addEventListener('load', handleScroll);
