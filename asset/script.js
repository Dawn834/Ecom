
document.addEventListener("click", function (e) {

    // CASE 1: CLICK VÀO BUTTON TOGGLE
    const toggleBtn = e.target.closest(".btn--toggle");
    if (toggleBtn) {
        e.preventDefault();

        const targetSelector = toggleBtn.dataset.target;
        if (!targetSelector) return;

        const targetEl = document.querySelector(targetSelector);
        if (!targetEl) return;

        const isOpen = targetEl.classList.contains("is-active");

        // Đóng TẤT CẢ dropdown khác (KHÔNG gồm dropdown hiện tại)
        document
            .querySelectorAll(".dropdown-menu.is-active")
            .forEach(function (el) {
                if (el !== targetEl) {
                    el.classList.remove("is-active");
                }
            });

        // Toggle dropdown hiện tại
        if (isOpen) {
            targetEl.classList.remove("is-active");
        } else {
            targetEl.classList.add("is-active");
        }

        return;
    }

    // CASE 2: CLICK VÀO CLOSE BUTTON
    const closeBtn = e.target.closest(".close-btn");
    if (closeBtn) {
        e.preventDefault();

        const selector = closeBtn.dataset.close;
        if (!selector) return;

        const target = closeBtn.closest(selector);
        if (!target) return;

        target.classList.remove("is-active");
        return;
    }


    // CASE 3: CLICK NGOÀI VÙNG → ĐÓNG DROPDOWN
    document
        .querySelectorAll(".dropdown-menu.is-active")
        .forEach(function (el) {
            el.classList.remove("is-active");
        });

});

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper === "undefined") {
        return;
    }

    new Swiper(".feature-product", {
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        watchOverflow: true,
        pagination: {
            el: ".feature-product__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".feature-product__nav--next",
            prevEl: ".feature-product__nav--prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
});


// homepage 
// tabs
const tabsContainer = document.querySelector(".tabs");

tabsContainer.addEventListener("click", (e) => {
    const tab = e.target.closest(".tabs__item");
    if (!tab) return;

    // remove active khỏi tất cả tab
    tabsContainer
        .querySelectorAll(".tabs__item")
        .forEach(item => item.classList.remove("active"));

    // add active cho tab được click
    tab.classList.add("active");
});

// 
// DISCOUNT TAB (click -> active giống Latest Products)
const discountTabs = document.querySelector(".discount-tab.tabs");

if (discountTabs) {
    discountTabs.addEventListener("click", (e) => {
        // Bạn click vào button hoặc dấu chấm, đều tìm lên .tabs__item
        const item = e.target.closest(".tabs__item");
        if (!item || !discountTabs.contains(item)) return;

        // 1) Remove active khỏi tất cả item
        discountTabs.querySelectorAll(".tabs__item").forEach((el) => {
            el.classList.remove("active");

            // set aria-selected=false cho button bên trong
            const btn = el.querySelector('[role="tab"]');
            if (btn) btn.setAttribute("aria-selected", "false");
        });

        // 2) Add active cho item vừa click
        item.classList.add("active");

        // set aria-selected=true cho button bên trong item active
        const activeBtn = item.querySelector('[role="tab"]');
        if (activeBtn) activeBtn.setAttribute("aria-selected", "true");
    });
}


