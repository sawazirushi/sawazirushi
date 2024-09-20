function filterProducts(category, element) {
    const products = document.querySelectorAll('.product');
    const buttons = document.querySelectorAll('.category-menu button');

    buttons.forEach(button => button.classList.remove('active'));

    element.classList.add('active');

    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else if (product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
