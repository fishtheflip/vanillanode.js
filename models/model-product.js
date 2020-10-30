const product = require('../product.json');
const {v4: uuid} = require('uuid');

const {writeDataToFile} = require('../util');

function findAll(){
    return new Promise((resolve, reject)=> {
        resolve(product)
    })
}

function findById(id){
    return new Promise((resolve, reject)=> {
        const prod = product.find((item)=> item.id === id );
        resolve(prod);
    })
}
function create(prod){
    return new Promise((resolve, reject)=> {
        const newProduct = { id: uuid(), ...prod}
        product.push(newProduct);
        writeDataToFile('./product.json', product);
        resolve(newProduct);
    })
}

module.exports = {
    findAll,
    findById,
    create
}