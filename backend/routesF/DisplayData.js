const express = require("express");
const Router = express.Router();

Router.post('/foodData',(req,res)=>{
    try {
        res.send([global.food2,global.food1]);
    }
    catch (error) {
        console.log("No Data To Display",error);
    }
});

module.exports=Router;