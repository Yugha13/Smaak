const express = require("express");
const cors = require("cors");

const food = require("./router/food");
const user = require("./router/user");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/food",food);
app.use('/user', user);

const PORT = process.env.PORT || 5002;

app.listen(PORT,()=>{
    console.log("Running on port",PORT);
})