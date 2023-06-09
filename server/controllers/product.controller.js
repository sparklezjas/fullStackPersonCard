const Product = require('../models/form.model')

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(product => response.json(product))
    .catch(err => response.json(err))
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(product => {response.json(product)})
        .catch(err => {response.json(err)})
}
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err=> response.json(err))
}