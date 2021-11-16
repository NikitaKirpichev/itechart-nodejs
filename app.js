const express = require("express");
const app = express();
const PORT = 3000;
const port = process.env.PORT || 3500;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const router = express.Router();
app.use(router);

require("./src/sequelize");
require("./src/dbaccess")();

router.use((err,req,res,next) => {
    if (err){
        return res.send(err.message);
    }
})

app.listen(PORT, err => {
    if (err){
        return console.log(`Cannot listen on port ${port}`);
    }
    console.log(`App listen on port ${port}`);
})