window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var foreground = document.querySelector('.foreground');
    var background = document.querySelector('.background');

    foreground.style.transform = 'translate3d(0, -' + scrollPosition * 2 + 'px, 0)';
    background.style.transform = 'translate3d(0, -' + scrollPosition * 1 + 'px, 0)';
});
