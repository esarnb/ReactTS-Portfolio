const path = require("path");
const vhost = require("vhost");
const express = require("express");

const app = express() // Entire Unit
const beta = express() // Subdomain
const main = express() // Main domain

let PORT = 80;

beta.use(function (req, res) {
    res.redirect("http://mc.esarnb.com:8080/");
});

main.use(express.urlencoded({ extended: true }));
main.use(express.json());
main.use(express.static("client/build"));

main.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(vhost("beta.esarnb.com", beta));
app.use(vhost("www.esarnb.com", main));
app.use(vhost("esarnb.com", main));

app.listen(PORT, () => { console.log(`🌎 ==> Build version server deployed on port ${PORT}!`) });


/* PJS API SETUP

const app = express(); //entire unit

//Subdomains
const api = express();

api.get("/", (req, res) => {
  res.send(`Home`);
});

api.get("/ping", (req, res) => {
  res.json({
    yeet: "yote"
  });
});

 */