const Product = require('../models/model-product');



async function getProduct(req, res){
    try {
        const product = await Product.findAll();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(product));
    } catch (error) {
        console.log(error);
    }
}

async function getProd(req, res, id ){
    try {
        const product = await Product.findById(id);
        if(!product){
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Product is not exist'}));
        }else{
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(product));
        }

    } catch (error) {
        console.log(error);
    }
}

async function createProduct(req, res){
    try {

        const product = {
            title: 'Test Product',
            description: 'This is my prod',
            price: 100
        }
        let body = '';
        req.on()
        const newProduct = await Product.create(product);
        res.writeHead(201,{'Content-Type': 'application/json'});
        
        return res.end(JSON.stringify(newProduct));
    
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getProduct,
    getProd,
    createProduct
}