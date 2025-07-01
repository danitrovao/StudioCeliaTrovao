document.addEventListener('DOMContentLoaded', function () {

    const navbarHeight = document.getElementById('mainNavbar') ? document.getElementById('mainNavbar').offsetHeight : 70;
    document.body.setAttribute('data-bs-offset', navbarHeight + 10);
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNavbar',
        offset: navbarHeight + 10
    });

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});
