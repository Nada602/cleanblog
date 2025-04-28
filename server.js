// load env variable

require("dotenv").config();

// grap App Dependancies

const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// set public url for bootstrap files
app.use(
  "/js/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/css/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js/popper",
  express.static(path.join(__dirname, "node_modules/@popperjs/core/dist/umd"))
);
// imgs link
app.use(
  "/home-bg.jpg",
  express.static(path.join(__dirname, "assets/img/home-bg.jpg"))
);
app.use(
  "/about-bg.jpg",
  express.static(path.join(__dirname, "assets/img/about-bg.jpg"))
);
app.use(
  "/contact-bg.jpg",
  express.static(path.join(__dirname, "assets/img/contact-bg.jpg"))
);
app.use(
  "/post-bg.jpg",
  express.static(path.join(__dirname, "assets/img/contact-bg.jpg"))
);
app.use(
  "/post-sample-image.jpg",
  express.static(path.join(__dirname, "assets/img/post-sample-image.jpg"))
);
app.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "assets/favicon.ico"))
);


// css files link
app.use(
  "/style.css",
  express.static(path.join(__dirname, "style/style.css"))
);


// set veiw Engine

app.set("view engine", "ejs");

// set APP routes
const webRouter = require("./routes/web.js");
app.use(webRouter);

//  run app server

app.listen(port, () => {
  console.log(`server running  on localhost:${port}`);
});
