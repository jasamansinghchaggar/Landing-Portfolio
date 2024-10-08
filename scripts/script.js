// scroll to links
var aboutScroll = document.querySelector('#about-scroll');
var aboutSection = document.querySelector('#about');
aboutScroll.addEventListener('click', function () {
    locoScroll.scrollTo(aboutSection);
});

var workScroll = document.querySelector('#work-scroll');
var workSection = document.querySelector('#work');
workScroll.addEventListener('click', function () {
    locoScroll.scrollTo(workSection);
});

var expertiseScroll = document.querySelector('#expertise-scroll');
var expertiseSection = document.querySelector('#expertise');
expertiseScroll.addEventListener('click', function () {
    locoScroll.scrollTo(expertiseSection);
});

var collaborateScroll = document.querySelector('#collaborate-scroll');
var collaborateSection = document.querySelector('#collaborate');
collaborateScroll.addEventListener('click', function () {
    locoScroll.scrollTo(collaborateSection);
});


// Scroll to top
var scrolltop = document.querySelector('#scroll-top');
scrolltop.addEventListener('click', function () {
    locoScroll.scrollTo(0);
});


// Cursor
var body = document.querySelector('body');
var cursor = document.querySelector('#cursor');
var hoverTextElements = document.querySelectorAll('.hover-text');
var removeCursor = document.querySelectorAll('.remove-cursor');

body.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
        ease: 'back'
    });
});

hoverTextElements.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 3,
            duration: 0.2
        });
    });

    elem.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.2
        });
    });
});

removeCursor.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            opacity: 0,
            duration: 0.2
        });
    });

    elem.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            opacity: 1,
            duration: 0.2
        });
    });
});