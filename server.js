const express = require("express");
const app = express();


const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`<h1>Hello World</>`);
});

app.listen(port,()=> {
    console.log("server is startd s")
})