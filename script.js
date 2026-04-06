// 註冊 GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 簡單的淡入浮現
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

// 痛點卡片交錯浮現
ScrollTrigger.create({
    trigger: ".pain-grid",
    start: "top 80%",
    onEnter: () => {
        gsap.fromTo(".gs-reveal-up", 
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        );
    }
});
