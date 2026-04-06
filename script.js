// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 1. 首頁背景視差與放大效果 (Hero Parallax)
gsap.to(".hero-bg", {
    scale: 1, // 從 CSS 的 1.05 縮小回 1
    duration: 2,
    ease: "power2.out"
});

// 首頁文字進場動畫
gsap.from(".gold-quote", { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
gsap.from(".hero-title", { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: "power3.out" });
gsap.from(".btn-group", { y: 30, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });

// 2. 自動監聽所有標有 .gs-reveal 的元素，執行滾動觸發動畫
const revealElements = document.querySelectorAll(".gs-reveal");

revealElements.forEach((elem) => {
    gsap.fromTo(elem, 
        { 
            y: 50, 
            opacity: 0 
        }, 
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%", // 當元素頂部到達視窗 85% 位置時觸發
                toggleActions: "play none none none" // 只播放一次
            }
        }
    );
});

// 3. 痛點六宮格交錯出現效果 (Stagger)
ScrollTrigger.create({
    trigger: ".pain-grid",
    start: "top 80%",
    onEnter: () => {
        gsap.fromTo(".pain-card", 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.15, // 每張卡片延遲 0.15 秒出現，營造節奏感
                ease: "back.out(1.2)"
            }
        );
    }
});
