var typed = new Typed('#element', {
    strings: ['UI Designer', 'Video Editor', 'Web Developer'],
    typeSpeed: 50,
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {
    var scrollElements = document.querySelectorAll(".scroll-effect");

    function checkScroll() {
        var windowHeight = window.innerHeight;

        for (var i = 0; i < scrollElements.length; i++) {
            var element = scrollElements[i];
            var positionFromTop = scrollElements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("visible");
            }
        }
    }


    checkScroll();


    window.addEventListener("scroll", checkScroll);
});







document.addEventListener("DOMContentLoaded", function () {
    var scrollElements = document.querySelectorAll(".scroll-effect");
    var fadeInElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        var windowHeight = window.innerHeight;

        for (var i = 0; i < scrollElements.length; i++) {
            var element = scrollElements[i];
            var positionFromTop = scrollElements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("visible");
            }
        }
    }

    function fadeInElementsOnLoad() {
        for (var i = 0; i < fadeInElements.length; i++) {
            var element = fadeInElements[i];
            element.style.opacity = "0";
            element.style.transition = "opacity 0.5s ease-in";

            (function (el) {
                setTimeout(function () {
                    el.style.opacity = "1";
                }, 300 * i);
            })(element);
        }
    }





    checkScroll();
    ll
    window.addEventListener("scroll", checkScroll);


    fadeInElementsOnLoad();
});
