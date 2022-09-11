const router=require("express").Router();
const CryptoJS=require('crypto-js')
const Cart=require('../models/Cart')
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}=require('./Middleware/verifyToken')

//Create Product only admin can create products
router.post('/',verifyToken,async (req,res)=>{
    const newCart=new Cart(req.body);
    try{
        const createdCart=await newCart.save()
        res.status(200).json(createdCart);

    }catch(err){
        res.status(500).json(err)
    }
})

//update cart 
router.put('/:id',verifyTokenAndAuthorization,async (req,res)=>{
    try{
        const updatedCart= await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        //the new :true object property is need to send with the updated user input.
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)

    }
})
//Delete Cart api
router.delete('/:id',verifyTokenAndAuthorization, async (req,res)=>{

     try{
     const deleteCart= await Cart.findByIdAndDelete(req.params.id);
     res.status(200).json("Cart successfully deleted.");
     } catch(err){
        res.status(500).json(err);
     }       

})
//Get user Cart using user id
router.get('/find/:userId',verifyTokenAndAuthorization, async (req,res)=>{
     try{
     const cart= await Cart.findOne({userId:req.params.userId});
     const {userId,...others}=cart._doc
     res.status(200).json(others)


     } catch(err){
        res.status(500).json(err)
     }       
})
// Get all carts 
router.get('/',verifyTokenAndAdmin, async (req,res)=>{
        try{
            carts=await Cart.find();
            res.status(200).json(carts)
            } catch(err){
                res.status(500).json(err)
            }       

})


module.exports=router;








