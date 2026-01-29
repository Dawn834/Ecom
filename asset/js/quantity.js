document.addEventListener("click", (e) => {
    const minusBtn = e.target.closest(".js-qty-minus");
    const plusBtn = e.target.closest(".js-qty-plus");

    if (!minusBtn && !plusBtn) return;

    const quantity = e.target.closest(".quantity");
    const input = quantity.querySelector(".js-qty-input");

    let value = parseInt(input.value, 10) || 1;
    const min = parseInt(input.min, 10) || 1;

    if (minusBtn) {
        if (value > min) value--;
    }

    if (plusBtn) {
        value++;
    }

    input.value = value;
});
