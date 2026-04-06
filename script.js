// --- 滾動觸發動畫 (Intersection Observer) ---
// 設定一個觀察器，當元素進入視區時，添加 'is-visible' 類別
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // 觀察一次後即停止，提高性能
        }
    });
}, {
    threshold: 0.1 // 當元素出現 10% 時觸發
});

// 選擇所有需要被觀察的元素
const elementsToWatch = document.querySelectorAll('.scroll-section');

// 遍歷所有元素，開始觀察
elementsToWatch.forEach((element) => {
    observer.observe(element);
});

// --- 高級懸停呼吸效果 ---
// (這部分在 CSS 中，通過 .ingredient-card:hover 實現金色發光)
