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

    gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
            { y: 40, opacity: 0, filter: "blur(5px)" }, 
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
              scrollTrigger: { trigger: elem, start: "top 85%" } }
        );
    });

    gsap.fromTo('.gs-reveal-left', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.gs-reveal-left', start: "top 80%" } });
    gsap.fromTo('.gs-reveal-right', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: '.gs-reveal-right', start: "top 80%" } });

    ScrollTrigger.create({
        trigger: ".cert-grid", start: "top 80%",
        onEnter: () => { gsap.fromTo(".gs-stagger", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }); }
    });
    ScrollTrigger.create({
        trigger: ".pain-grid", start: "top 80%",
        onEnter: () => { gsap.fromTo(".gs-stagger-pain", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.1)" }); }
    });

    // 3. 痛點輪播
    var painSwiper = new Swiper(".painSwiper", {
        loop: true, effect: "fade", fadeEffect: { crossFade: true },
        speed: 1200, autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    // 4. 見證評價輪播
    var testiSwiper = new Swiper(".testimonialSwiper", {
        loop: true, grabCursor: true, spaceBetween: 30, speed: 800,
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

    // 🔥🔥🔥 6. 動態飢餓行銷計算法 (每天自動減少) 🔥🔥🔥
    function updateUrgencyCounter() {
        const totalAmount = 200; // 總數 200 份
        const now = new Date();
        const currentDay = now.getDate(); // 取得今天是每個月的第幾天 (1~31)
        const currentHour = now.getHours(); // 取得現在是幾點 (0~23)

        // 計算邏輯：每天固定減少 5 份，且每經過 3 小時會多扣 1 份
        // 這樣能保證同一個訪客早上看跟晚上看，數字會不一樣！
        let soldAmount = (currentDay * 5) + Math.floor(currentHour / 3);
        let remaining = totalAmount - soldAmount;

        // 設定底線：保證數字絕對不會變成負數，最低停在「最後 3 份」，創造極度稀缺感
        if (remaining < 3) {
            remaining = 3;
        }

        // 更新網頁上的數字
        const numElement = document.getElementById('dynamic-num');
        if (numElement) {
            numElement.innerText = remaining;
        }

        // 搭配滾動動畫：當滑到這個區塊時，進度條才開始縮減
        ScrollTrigger.create({
            trigger: ".urgency-box",
            start: "top 90%",
            onEnter: () => {
                const barElement = document.getElementById('dynamic-bar');
                if (barElement) {
                    const percentage = (remaining / totalAmount) * 100;
                    barElement.style.width = percentage + '%';
                }
            }
        });
    }

    // 執行計算
    updateUrgencyCounter();
});
