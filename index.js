//console.log('hello');

function saludar (saludo){
    console.log(saludo);
}

saludar("hola ale");

var http = require('http');

var hostname = "127.0.0.1";
var port = 3000

// // ejemplo 1: cra servidor
// var server = http.createServer((reg,res)=>{
//     res.statusCode = 200
//     res.setHeader("Content-type", "text/palin");
//     res.end("HOLA"); //llamda simple
// });
// // ejemplo 1: ejecuta servidor( lo pone a escuchar)
// server.listen(port,hostname,() =>{
//     saludar("servidor iniciado en puerto " + port )
// });

// ejemplo 2; lee archivo html y lo retorna
// en el retorno  resive por parametros err y html
// luego sirve el html del archivo
var fs = require('fs');
fs.readFile("index.html",(err,html) => {
    // revisa si err
    if (err){
        saludar(err);
        throw err;
    }
    // crea servidor
    var server = http.createServer((reg,res)=>{
        res.statusCode = 200
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
    });
    // pone en escucha
    server.listen(port,hostname,() =>{
        saludar("servidor iniciado en puerto " + port )
    });
});


