import http from "http";

const server = http.createServer(); // turn on the server and the number of times request comes respond 
server.on('request',(req,res)=>{
    res.write("<h1>Welcome to the Server side programming</h1>");
    res.write("<h2>Nodemon is tracing the files</h2>") ;
    res.write("<h3>Hello Arpit </h3>") ;
    res.end();
});

server.listen(5000, ()=>{
    console.log("Server is Running")
});