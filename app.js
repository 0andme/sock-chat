const express= require('express');
const app= express();
const http=require('http');
const server = http.createServer(app);

app.get('/',(req,res)=>{
res.send("express work!");
});

server.listen(3000,()=>{
  console.log("express server is now listening on localhost:3000..");
});
