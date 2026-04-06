// 初始化 Swiper 輪播
var swiper = new Swiper(".painSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true, // 無限循環
    autoplay: {
        delay: 5000, // 每5秒自動換圖
        disableOnInteraction: false,
    },
    effect: "fade", // 使用高質感的淡入淡出效果
});

// 註冊 GSAP 動畫
gsap.registerPlugin(ScrollTrigger);

// 元素進入視窗時的浮現動畫
gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
    gsap.fromTo(elem, 
        { y: 40, opacity: 0 }, 
        {
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: elem, start: "top 85%" }
        }
    );
});

// 左側滑入
gsap.fromTo('.gs-reveal-left', 
    { x: -50, opacity: 0 }, 
    {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: '.gs-reveal-left', start: "top 80%" }
    }
);

// 右側滑入
gsap.fromTo('.gs-reveal-right', 
    { x: 50, opacity: 0 }, 
    {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: '.gs-reveal-right', start: "top 80%" }
    }
);
