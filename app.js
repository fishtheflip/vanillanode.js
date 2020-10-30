const http = require('http');
const {getProduct, getProd, createProduct} = require('./controllers/product-controller');
const PORT = process.evn || 3002;

const server = http.createServer((req, res)=>{
    if(req.url === '/api/product' && req.method === 'GET'){
        
        getProduct(req,res);
        
    } 
     else if(req.url.match(/\/api\/product\/([0-9]+)/) && req.method ==='GET'){
        const id = req.url.split('/')[3];
        getProd(req, res, id);
        
    } 
    else if(req.url === '/api/product' && req.method === 'POST'){
        console.log('111')
        createProduct(req,res);
        
    }
    else { 
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Not Found'}));
    }

});



server.listen(PORT, console.log("server runnin on " + PORT));