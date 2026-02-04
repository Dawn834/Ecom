function initFilterExclusive(container, itemSelector = ".filter-item") {
    if (!container) return;

    container.addEventListener("click", (e) => {
        const item = e.target.closest(itemSelector);
        if (!item || !container.contains(item)) return;

        // remove active của các filter khác trong box
        container.querySelectorAll(`${itemSelector}.active`).forEach((el) => {
            el.classList.remove("active");
        });

        // add active cho filter vừa click
        item.classList.add("active");

        // (tuỳ chọn) lấy giá trị filter
        const value = item.dataset.value;
        console.log("Filter selected:", value);
    });
}

// init cho TẤT CẢ filter box trên trang
document.querySelectorAll(".filter-box").forEach((box) => {
    initFilterExclusive(box);
});
