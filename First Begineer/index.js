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
//   res.render("index", { title: "Examples" });
// });

// const formData = [
//   { title: "First Item", description: "This is the first item description." },
//   { title: "Second Item", description: "This is the second item description." },
//   { title: "Third Item", description: "This is the third item description." },
// ];

// app.get("/data", (req, res) => {
//   res.render("data", { data: formData }, (err, html) => {
//     if (err) {
//       console.error("Error rendering the view:", err);
//       return res.status(500).send("Something went wrong!");
//     }
//     res.send(html);
//   });
// });

// app.get("*", (req, res) => {
//   res.render("not-found");
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
