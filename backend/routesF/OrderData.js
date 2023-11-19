const express=require("express");
const Router = express.Router();
const Order=require("../model/Orders")

Router.post('/orderData',async(req,res)=>{
    let data= req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.Order_date}); 
    
    //if email is not existing in db then create: else:InsertMany()
    let eId = await Order.findOne({'email':req.body.email})
    console.log(eId)
    if(eId==null){
        try{
            await Order.create({
                email :req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        }
        catch(error){
            console.log(error);
            res.send("Server Error",error);
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({succes:true})
                })    
        } 
        catch (error) {
            res.send("Server Error",error.message);
        }
    }
})

Router.post('/myOrderData',async(req,res)=>{
    try {
        let myData = await Order.findOne({'email':req.body.email});
        res.json({orderData:myData});    
    }
    catch (error) {
        res.send("Server Error",error);
    }
})


module.exports=Router;
