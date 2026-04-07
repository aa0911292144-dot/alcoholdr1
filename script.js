document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 選單邏輯
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.querySelector('i').classList.toggle('ri-close-line');
    });

    // 2. GSAP 動畫
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.cinematic-reveal', { opacity: 0, y: 30, filter: "blur(15px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, delay: 0.5 });
    gsap.fromTo('.cinematic-reveal-delayed', { opacity: 0, y: 30, filter: "blur(15px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.5, delay: 1.2 });

    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, scrollTrigger: { trigger: elem, start: "top 85%" } });
    });

    // 3. 輪播
    new Swiper(".painSwiper", { loop: true, effect: "fade", autoplay: { delay: 4000 }, pagination: { el: ".swiper-pagination", clickable: true } });
    new Swiper(".testimonialSwiper", { loop: true, grabCursor: true, spaceBetween: 30, autoplay: { delay: 5000 }, pagination: { el: ".testi-pagination", clickable: true } });

    // 4. 🔥 飢餓行銷動態計算 🔥
    function initUrgency() {
        const total = 200;
        const now = new Date();
        const day = now.getDate();
        const hour = now.getHours();

        // 每天少 5 份，每 2 小時少 1 份
        let sold = (day * 5) + Math.floor(hour / 2);
        let remaining = total - sold;
        if (remaining < 5) remaining = 5;

        const numEl = document.getElementById('dynamic-num');
        const barEl = document.getElementById('dynamic-bar');
        if (numEl) numEl.innerText = remaining;

        ScrollTrigger.create({
            trigger: ".cta-section",
            start: "top 80%",
            onEnter: () => {
                if (barEl) barEl.style.width = (remaining / total * 100) + "%";
            }
        });
    }
    initUrgency();
});
