document.addEventListener("DOMContentLoaded", function() {
    // 1. 初始化 Swiper (改為穩定的 slide 效果，確保一定會動)
    var swiper = new Swiper(".painSwiper", {
        loop: true,
        speed: 800, // 滑動速度
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 2. 初始化 GSAP 動畫
    gsap.registerPlugin(ScrollTrigger);

    // 基礎上浮浮現
    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
            { y: 40, opacity: 0 }, 
            {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: elem, start: "top 85%" }
            }
        );
    });

    // 左側滑入 (產品圖)
    gsap.fromTo('.gs-reveal-left', 
        { x: -50, opacity: 0 }, 
        {
            x: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: '.gs-reveal-left', start: "top 80%" }
        }
    );

    // 右側滑入 (成分表)
    gsap.fromTo('.gs-reveal-right', 
        { x: 50, opacity: 0 }, 
        {
            x: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: '.gs-reveal-right', start: "top 80%" }
        }
    );
});
