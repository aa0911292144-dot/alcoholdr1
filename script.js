document.addEventListener("DOMContentLoaded", function() {
    
    // 1. GSAP 進階動畫註冊
    gsap.registerPlugin(ScrollTrigger);

    // === 首頁標題：電影級「若隱若現」出場特效 ===
    // 副標題先出
    gsap.fromTo('.cinematic-reveal', 
        { opacity: 0, y: 30, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power3.out", delay: 0.5 }
    );
    // 主標題接續
    gsap.fromTo('.cinematic-reveal-delayed', 
        { opacity: 0, y: 30, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2.5, ease: "power3.out", delay: 1.2 }
    );
    // 按鈕最後浮現
    gsap.fromTo('.cinematic-reveal-delayed-more', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 2.2 }
    );

    // 2. 頂級輪播設定 (完全解決疊影)
    var swiper = new Swiper(".painSwiper", {
        loop: true, 
        effect: "fade", 
        fadeEffect: { crossFade: true },
        speed: 1500, 
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // 3. 基礎滾動上浮 (加入 blur 特效)
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

    // 卡片依序出現動畫 (Stagger)
    ScrollTrigger.create({
        trigger: ".cert-grid", start: "top 80%",
        onEnter: () => { gsap.fromTo(".gs-stagger", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }); }
    });

    ScrollTrigger.create({
        trigger: ".pain-grid", start: "top 80%",
        onEnter: () => { gsap.fromTo(".gs-stagger-pain", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" }); }
    });

    // 導覽列滾動變色
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0'; nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.padding = '15px 0'; nav.style.background = 'rgba(10, 10, 10, 0.85)';
        }
    });
});
