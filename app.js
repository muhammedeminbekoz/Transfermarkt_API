require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const Router = require('./src/routers/router');


app.use(express.json());

app.use('/transfermarkt/players', Router)

app.get("/", (req, res) => {
    res.send("hello world");
})


app.listen(port, () => {
    console.log(`http://localhost:${port} is running`);
})