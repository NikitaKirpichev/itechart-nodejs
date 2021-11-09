const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const router = express.Router();
app.use(router);

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