const request = require('supertest');
const app = require('../src/app');
let productId;

describe('Product Routes', () => {
    // Test POST /products
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({ name: 'Hammer', price: 12.99 });

        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('Hammer');
        expect(res.body.price).toEqual(12.99);
        productId = res.body.id;
    });

    // Test GET /products
    it('should fetch all products', async () => {
        const res = await request(app)
            .get('/api/products');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    // Test GET /products/:id
    it('should fetch a product by id', async () => {
        const res = await request(app)
            .get(`/api/products/${productId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Hammer');
        expect(res.body.price).toEqual(12.99);
    });

    // Test PUT /products/:id
    it('should update a product by id', async () => {
        const updatedProduct = { name: 'Updated Hammer', price: 15.99 };

        const res = await request(app)
            .put(`/api/products/${productId}`)
            .send(updatedProduct);

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual('Updated Hammer');
        expect(res.body.price).toEqual(15.99);
    });

    // Test DELETE /products/:id
    it('should delete a product by id', async () => {
        const res = await request(app)
            .delete(`/api/products/${productId}`);

        expect(res.statusCode).toEqual(204);

        // Verify the product is deleted
        const getProductRes = await request(app)
            .get(`/api/products/${productId}`);

        expect(getProductRes.statusCode).toEqual(404);
    });
});
