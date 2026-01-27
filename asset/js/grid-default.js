document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-tab-btn");
    if (!btn) return;

    const tabKey = btn.dataset.tab;
    if (!tabKey) return;

    // 1. BỎ ACTIVE TẤT CẢ BUTTON
    document.querySelectorAll(".js-tab-btn.active").forEach((b) => {
        b.classList.remove("active");
    });

    // 2. BỎ ACTIVE TẤT CẢ PANEL
    document.querySelectorAll(".js-tab-panel.active").forEach((p) => {
        p.classList.remove("active");
    });

    // 3. ADD ACTIVE CHO BUTTON ĐƯỢC CLICK
    btn.classList.add("active");

    // 4. ADD ACTIVE CHO PANEL TƯƠNG ỨNG
    const panel = document.querySelector(
        `.js-tab-panel[data-tab="${tabKey}"]`
    );
    if (panel) panel.classList.add("active");
});
