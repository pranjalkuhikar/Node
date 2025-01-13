// Creating Server Http Server
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello, world!");
// });
// server.listen(3000);

// Creating Server in Express Server
// const express = require("express");
// const app = express();
// app.get("/",(req,res)=>{
//     res.send("Hello, world!");
// })
// app.listen(3000);

// Creating SSR through EJS
// const express = require("express");
// const app = express();
// const path = require("path");
// const morgan = require("morgan");

// app.use(morgan("dev"));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("*", (req, res) => {
//   res.send("404 Page Not Found");
// });

// app.listen(3000);

// Form Handling
// const express = require("express");
// const app = express();
// const path = require("path");

// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.post("/create", (req, res) => {
//   console.log(req.body);
//   res.send("Received");
// });
// app.listen(3000);
