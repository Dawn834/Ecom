
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


// dropdown 
document.addEventListener('click', (e) => {
    const btn = e.target.closest(".dropdown__btn");
    const dropdown = e.target.closest(".dropdown");

    if (btn) {
        const currentdropdown = btn.closest(".dropdown");

        // close dropdown
        document.querySelectorAll(".dropdown.active").forEach(d => {
            if (d !== currentdropdown) {
                d.classList.remove("active");
            }
        });
        // toggle dropdown
        currentdropdown.classList.toggle("active");
        return;
    }

    // close dropdown click item
    const item = e.target.closest(".dropdown__item");
    if (item) {
        e.preventDefault(); // vì item là <a>

        const parentDropdown = item.closest(".dropdown");
        const dropdownBtn = parentDropdown.querySelector(".dropdown__btn");

        // lưu giá trị
        const value = item.textContent.trim();
        selectedDropdownValue = value;

        // hiển trị lên btn : textContetn
        dropdownBtn.textContent = value;

        // close dropdown
        parentDropdown.classList.remove("active");

        console.log("Selected:", selectedDropdownValue);
        return;
    }

    // click overlay close dropdown
    if (!dropdown)
        document.querySelectorAll(".dropdown.active").forEach(d => {
            d.classList.remove("active")
        });

    // click esc --> close dropdown
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".dropdown.active").forEach(d => {
                d.classList.remove("active");
            });
        }
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

// tab js
function initTabs(tabsElement) {
    const buttons = tabsElement.querySelectorAll(".js-tab-btn");
    const items = tabsElement.querySelectorAll(".tabs__item");
    const scope =
        tabsElement.closest("[data-tabs-scope]") ||
        tabsElement.closest("section") ||
        tabsElement.parentElement ||
        document;
    const panels = scope.querySelectorAll(".js-tab-panel");

    if (!buttons.length || !panels.length) return;

    tabsElement.addEventListener("click", (e) => {
        const btn = e.target.closest(".js-tab-btn");
        const item = e.target.closest(".tabs__item");
        if (!btn && !item) return;
        if (btn && !tabsElement.contains(btn)) return;
        if (item && !tabsElement.contains(item)) return;

        const target = (btn && btn.dataset.tab) || (item && item.dataset.tab);
        if (!target) return;

        // remove active khỏi tất cả tabs
        if (items.length) {
            items.forEach((item) => item.classList.remove("active"));
        } else {
            buttons.forEach((b) => b.classList.remove("active"));
        }

        buttons.forEach((b) => {
            if (b.getAttribute("role") === "tab") {
                b.setAttribute("aria-selected", "false");
            }
        });

        // remove active khỏi tất cả panels
        panels.forEach((p) => p.classList.remove("active"));

        // add active cho tab hiện tại
        const activeItem = (btn && btn.closest(".tabs__item")) || item || btn;
        activeItem.classList.add("active");
        const activeBtn = btn || activeItem.querySelector(".js-tab-btn");
        if (activeBtn && activeBtn.getAttribute("role") === "tab") {
            activeBtn.setAttribute("aria-selected", "true");
        }

        // add active cho panel tương ứng
        const panel = scope.querySelector(
            `.js-tab-panel[data-tab="${target}"]`
        );
        if (panel) panel.classList.add("active");
    });
}

document.querySelectorAll(".tabs").forEach((tabsElement) => {
    if (tabsElement.querySelector(".js-tab-btn")) {
        initTabs(tabsElement);
    }
});

// Swiper carousel per view
var swiper = new Swiper(".mySwiper-per-view", {
    slidesPerView: 4,
    spaceBetween: 30,
    watchOverflow: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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

// 1 view
var swiper = new Swiper(".mySwiper-1view", {
    pagination: {
        el: ".swiper-pagination",
    },
});

