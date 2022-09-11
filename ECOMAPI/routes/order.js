
const router=require("express").Router();
const CryptoJS=require('crypto-js')
const Order=require('../models/Order')
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}=require('./Middleware/verifyToken')

//Create Product only admin can create products
router.post('/',verifyToken,async (req,res)=>{
    const newOrder=new Order(req.body);
    try{
        const createdOrder=await newOrder.save()
        res.status(200).json(createdOrder);

    }catch(err){
        res.status(500).json(err)
    }
})

//update order 
router.put('/:id',verifyTokenAndAdmin,async (req,res)=>{
    try{
        const updatedOrder= await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        //the new :true object property is need to send with the updated user input.
        res.status(200).json(updateOrder)
    }catch(err){
        res.status(500).json(err)
    }
})
//Delete Order api
router.delete('/:id',verifyTokenAndAdmin, async (req,res)=>{
     try{
     const deleteOrder= await Order.findByIdAndDelete(req.params.id);
     res.status(200).json("Order successfully deleted.")
     } catch(err){
        res.status(500).json(err)
     }       
})
//Get all orders 
router.get('/',verifyTokenAndAdmin, async (req,res)=>{
     try{
     const allorders= await Order.find();
     res.status(200).json(allorders)
     } catch(err){
        res.status(500).json(err)
     }       
})

// Get order statstics
router.get("/income",verifyTokenAndAdmin,async (req,res)=>{
    //first september
    const date =new Date();
    //first august
    const lastmonth=new Date(date.setMonth(date.getMonth()-1))
    //fisrt july
    console.log(lastmonth);
    const previousmonth=new Date(new Date().setMonth(lastmonth.getMonth()-1))
    console.log(previousmonth);
    try{
            const orderincome=await Order.aggregate([
                {$match:{createdAt:{$gte:previousmonth}}},
                {$project:
                    {
                        month:{$month:"$createdAt"},
                        sales:"$amount",
                    },
                },
                {                    
                  $group:{
                                _id:"$month",
                                total:{$sum:"$sales"}             
                          }
                },
                ]);
            res.status(200).json(orderincome)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports=router;








