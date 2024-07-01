
const request = require('supertest');
const app = require('../src/app');



let productId;
const mockProduct = {
    name: 'Hammer',
    price: 12.99
};

describe('Product API', () => {
    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .send(mockProduct);

        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(mockProduct.name);
        expect(res.body.price).toEqual(mockProduct.price);
        productId = res.body.id;
    });

    it('should fetch a product by id', async () => {
        const res = await request(app)
            .get(`/api/products/${productId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(mockProduct.name);
        expect(res.body.price).toEqual(mockProduct.price);
    });

    it('should update a product', async () => {
        const updatedProduct = {
            name: 'Updated Hammer',
            price: 15.99
        };

        const res = await request(app)
            .put(`/api/products/${productId}`)
            .send(updatedProduct);

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(updatedProduct.name);
        expect(res.body.price).toEqual(updatedProduct.price);
    });

    it('should delete a product', async () => {
        const res = await request(app)
            .delete(`/api/products/${productId}`);

        expect(res.statusCode).toEqual(204);


        const getProductRes = await request(app)
            .get(`/api/products/${productId}`);

        expect(getProductRes.statusCode).toEqual(404);
    });
});
