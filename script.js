document.addEventListener("DOMContentLoaded", function() {
    
    // 初始化動畫庫 GSAP 插件
    gsap.registerPlugin(ScrollTrigger);

    // ✅ 首頁標題：電影級進場特效 (Blur 淡入)
    gsap.fromTo('.cinematic-reveal', 
        { opacity: 0, y: 30, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo('.cinematic-reveal-delayed', 
        { opacity: 0, y: 30, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power3.out", delay: 1.2 }
    );

    // ✅ 產品列表依序浮現 (Stagger 效果)
    ScrollTrigger.create({
        trigger: ".product-grid",
        start: "top 75%", // 當區塊到達視窗 75% 位置時觸發
        onEnter: () => {
            gsap.fromTo(".gs-stagger", 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
            );
        }
    });

    // ✅ 試用申請區滾動浮現
    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
            { y: 40, opacity: 0, filter: "blur(5px)" }, 
            {
                y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // ✅ 申請按鈕最後浮現
    ScrollTrigger.create({
        trigger: ".application-section",
        start: "top 70%",
        onEnter: () => {
            gsap.fromTo(".gs-reveal-btn", 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
            );
            gsap.fromTo(".gs-reveal-btn-line", 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
            );
        }
    });
});
