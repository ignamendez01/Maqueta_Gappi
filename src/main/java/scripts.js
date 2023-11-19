document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll('.connection, .medicine');

    function handleScroll() {
        fadeElements.forEach(function(element) {
            var bounding = element.getBoundingClientRect();

            if (
                bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0.57;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});