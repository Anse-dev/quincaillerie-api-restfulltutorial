
const Product = require('../src/models/Product');

test('create new Product instance', () => {
    const product = new Product(1, 'Hammer', 12.99);
    expect(product.id).toBe(1);
    expect(product.name).toBe('Hammer');
    expect(product.price).toBe(12.99);
});
