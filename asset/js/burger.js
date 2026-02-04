document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-burger-btn");
    const menu = e.target.closest(".burger");

    if (btn) {
        const current = btn.closest(".burger");

        document.querySelectorAll(".burger.active").forEach(b => {
            if (b !== current) b.classList.remove("active");
        });

        current.classList.toggle("active");
        return;
    }

    if (!menu) {
        document.querySelectorAll(".burger.active")
            .forEach(b => b.classList.remove("active"));
    }
});
