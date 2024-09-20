function updatePrice(quantity) {
    const pricePerUnit = 5;
    const totalPrice = pricePerUnit * quantity;
    document.querySelector('.product-price').textContent = 'ラピスラズリ' + totalPrice.toLocaleString();
}