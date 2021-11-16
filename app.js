const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require("./src/models");

db.sequelize.sync();

app.get("/", (req,res) => {
    res.json({message: "Hello"});
})

require("./src/routers/routers")(app);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log (`Server is running on port ${PORT}`);
});