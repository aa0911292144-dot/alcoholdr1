document.addEventListener("DOMContentLoaded", function() {
    
    // 頂級輪播設定
    var swiper = new Swiper(".painSwiper", {
        loop: true, effect: "fade", fadeEffect: { crossFade: true },
        speed: 1500, autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // GSAP 高級進場動畫
    gsap.registerPlugin(ScrollTrigger);

    // 基礎模糊上浮
    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
            { y: 50, opacity: 0, filter: "blur(5px)" }, 
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
              scrollTrigger: { trigger: elem, start: "top 85%" } }
        );
    });

    // 左右滑入特效
    gsap.fromTo('.gs-reveal-left', 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.gs-reveal-left', start: "top 80%" } }
    );
    gsap.fromTo('.gs-reveal-right', 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.gs-reveal-right', start: "top 80%" } }
    );

    // 【新增】安全認證區 Stagger 依序出現動畫
    ScrollTrigger.create({
        trigger: ".cert-grid",
        start: "top 80%",
        onEnter: () => {
            gsap.fromTo(".gs-stagger", 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
            );
        }
    });

    // 【新增】六宮格痛點區 Stagger 依序出現動畫
    ScrollTrigger.create({
        trigger: ".pain-grid",
        start: "top 80%",
        onEnter: () => {
            gsap.fromTo(".gs-stagger-pain", 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" }
            );
        }
    });

    // 導覽列特效
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0'; nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.padding = '15px 0'; nav.style.background = 'rgba(10, 10, 10, 0.85)';
        }
    });
});
