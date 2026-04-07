document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 手機版選單邏輯
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('ri-menu-3-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-3-line');
        }
    });

    // 2. 動畫註冊
    gsap.registerPlugin(ScrollTrigger);

    // 首頁電影級進場
    gsap.fromTo('.cinematic-reveal', 
        { opacity: 0, y: 30, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power3.out", delay: 0.5 }
    );
    gsap.fromTo('.cinematic-reveal-delayed', 
        { opacity: 0, y: 30, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.5, ease: "power3.out", delay: 1.2 }
    );
    gsap.fromTo('.cinematic-reveal-delayed-more', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 2.2 }
    );

    // 基礎滾動上浮
    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
            { y: 40, opacity: 0, filter: "blur(5px)" }, 
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
              scrollTrigger: { trigger: elem, start: "top 85%" } }
        );
    });

    // 左右滑入特效
    gsap.fromTo('.gs-reveal-left', 
        { x: -30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.gs-reveal-left', start: "top 80%" } }
    );
    gsap.fromTo('.gs-reveal-right', 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.gs-reveal-right', start: "top 80%" } }
    );

    // Stagger 依序出現
    ScrollTrigger.create({
        trigger: ".cert-grid", start: "top 80%",
        onEnter: () => { gsap.fromTo(".gs-stagger", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }); }
    });
    ScrollTrigger.create({
        trigger: ".pain-grid", start: "top 80%",
        onEnter: () => { gsap.fromTo(".gs-stagger-pain", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.1)" }); }
    });

    // 3. 痛點輪播設定
    var painSwiper = new Swiper(".painSwiper", {
        loop: true, effect: "fade", fadeEffect: { crossFade: true },
        speed: 1200, autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // 🔥 4. 新增：見證評價輪播設定 (卡片滑動特效)
    var testiSwiper = new Swiper(".testimonialSwiper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        speed: 800,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: ".testi-pagination", clickable: true },
    });

    // 5. 導覽列滾動變色
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0'; nav.style.background = 'rgba(5, 5, 5, 0.98)';
        } else {
            nav.style.padding = '15px 0'; nav.style.background = 'rgba(10, 10, 10, 0.85)';
        }
    });

    // 6. 進度條動畫觸發
    ScrollTrigger.create({
        trigger: ".urgency-box",
        start: "top 90%",
        onEnter: () => {
            document.querySelector('.progress-bar').style.width = '77%';
        }
    });
});
