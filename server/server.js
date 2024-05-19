const express = require("express");
const cors = require("cors");

const Food = require("./router/food");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/food",Food);

const PORT = process.env.PORT || 5002;

app.listen(PORT,()=>{
    console.log("Running on port",PORT);
})