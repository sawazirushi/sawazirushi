function updatePrice(quantity) {
    const pricePerUnit = 1;
    const totalPrice = pricePerUnit * quantity;
    document.querySelector('.product-price').textContent = 'ダイヤモンド' + totalPrice.toLocaleString();
}