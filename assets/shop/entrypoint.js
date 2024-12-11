// In this file you can import assets like images or stylesheets
console.log('Hello Webpack Encore! Edit me in assets/shop/entrypoint.js');
console.log('SHOP_ENTRYPOINT!!!!!!!!!!!');

document.addEventListener("DOMContentLoaded", function () {
    const quantityField = document.getElementById("sylius_shop_add_to_cart_cartItem_quantity");

    if (quantityField) {
        // Set initial value and step increment
        quantityField.value = 10;
        quantityField.step = 10;
        quantityField.min = 10;

        // Add event listener for change event
        quantityField.addEventListener("change", function () {
            const quantity = parseInt(this.value, 10);

            // Ensure the value is a valid increment of 10
            if (quantity % 10 !== 0) {
                this.value = Math.max(10, Math.round(quantity / 10) * 10);
            }

            // Display alert if quantity is 70
            if (this.value == 70) {
                alert("Great Choice!");
            }
        });
    }
});