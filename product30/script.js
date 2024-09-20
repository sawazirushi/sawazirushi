function updatePrice(quantity) {
    const pricePerUnit = 3;
    const totalPrice = pricePerUnit * quantity;
    document.querySelector('.product-price').textContent = 'レッドストーン' + totalPrice.toLocaleString();
}