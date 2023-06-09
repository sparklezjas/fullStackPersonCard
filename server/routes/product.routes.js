const ProductController = require('../controllers/product.controller');  

module.exports = (app) => {
    app.get('/api/product/:id', ProductController.getOneProduct)
    app.get('/api/product', ProductController.getAllProducts)
    app.post('/api/product', ProductController.createProduct)
}

