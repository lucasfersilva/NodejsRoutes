const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(`mongodb://localhost:27017/bd2osi`, {
    useNewUrlParser: true
})
//const app = require("express")()

app.use(require("./routes"));

app.listen(3340, () => {
    console.log("servidor rodando");
})
