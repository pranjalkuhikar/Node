// Creating Server Http Server
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello, world!");
// });
// server.listen(3000);

// Creating Server in Express Server
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello, world!");
})
app.listen(3000);