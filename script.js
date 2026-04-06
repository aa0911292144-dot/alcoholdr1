document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 頂級輪播設定 (採用 Fade 淡入淡出，展現高級感)
    var swiper = new Swiper(".painSwiper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 1500, // 1.5秒的優雅過渡
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 2. GSAP 高級進場動畫
    gsap.registerPlugin(ScrollTrigger);

    // 基礎上浮 (加入 blur 模糊到清晰的特效)
    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
            { y: 50, opacity: 0, filter: "blur(5px)" }, 
            {
                y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
                scrollTrigger: { 
                    trigger: elem, 
                    start: "top 85%",
                    toggleActions: "play none none reverse" // 往回滾會微微重置
                }
            }
        );
    });

    // 左側滑入 (產品圖)
    gsap.fromTo('.gs-reveal-left', 
        { x: -60, opacity: 0 }, 
        {
            x: 0, opacity: 1, duration: 1.5, ease: "power4.out",
            scrollTrigger: { trigger: '.gs-reveal-left', start: "top 80%" }
        }
    );

    // 右側滑入 (成分表)
    gsap.fromTo('.gs-reveal-right', 
        { x: 60, opacity: 0 }, 
        {
            x: 0, opacity: 1, duration: 1.5, ease: "power4.out",
            scrollTrigger: { trigger: '.gs-reveal-right', start: "top 80%" }
        }
    );

    // 導覽列滾動變色縮小特效
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.padding = '15px 0';
            nav.style.background = 'rgba(10, 10, 10, 0.85)';
        }
    });
});
