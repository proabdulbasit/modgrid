(function () {
    const header = document.querySelector('.site-header');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    const onScroll = () => {
        if (!header) return;
        if (window.scrollY > 12) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navLinks.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();
