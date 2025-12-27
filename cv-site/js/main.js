document.addEventListener('DOMContentLoaded', () => {

    // ScrollReveal animation (offline: استخدم نسخة محلية إذا تريد)
    const revealElements = document.querySelectorAll('.info-item, .skill-item, .section-title');
    revealElements.forEach((el, i) => {
        el.style.opacity = 0;
        setTimeout(() => { el.style.opacity = 1; el.style.transform = 'translateY(0)'; }, i * 100);
    });

    // Language toggle
    let isArabic = true;
    const toggleBtn = document.querySelector('.lang-toggle');
    toggleBtn.addEventListener('click', () => {
        isArabic = !isArabic;
        document.documentElement.lang = isArabic ? "ar" : "en";
        document.documentElement.dir = isArabic ? "rtl" : "ltr";

        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            el.innerText = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        });

        toggleBtn.innerText = isArabic ? "English" : "العربية";
    });
});
