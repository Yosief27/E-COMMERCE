const router=require("express").Router();
const CryptoJS=require('crypto-js')
const User =require('../models/User')
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}=require('./Middleware/verifyToken')

router.put('/updateuser/:id',verifyTokenAndAuthorization,async (req,res)=>{
    //user can change the password
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }
    try{
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        //the new :true object property is need to send with the updated user input.
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)

    }
})
//Delete user api
router.delete('/deleteuser/:id',verifyTokenAndAuthorization, async (req,res)=>{
     try{
     const userDelete= await User.findByIdAndDelete(req.params.id);
     res.status(200).json("User successfully deleted.")
     } catch(err){
        res.status(500).json(err)
     }       

})
//Get user by id 
router.get('/finduser/:id',verifyTokenAndAdmin, async (req,res)=>{
     try{
     const userDelete= await User.findById(req.params.id);
     const {password,...otherDetail}=userDelete._doc;
     res.status(200).json(otherDetail)


     } catch(err){
        res.status(500).json(err)
     }       
})
// Get all users
router.get('/findallusers',verifyTokenAndAdmin, async (req,res)=>{
     //if we need only top new user rather than all
     // where the new is a query word is provided on the url
     const query=req.query.new;

     try{
     const allusers=query ? await User.find().sort({_id:-1}).limit(1):await User.find();
     res.status(200).json(allusers)


     } catch(err){
        res.status(500).json(err)
     }       

})

//Get user status
//like statistics related to users registered with in a year
router.get('/stats',verifyTokenAndAdmin,async (req,res)=>{
    const currentDate=new Date();
    const lastYear= new Date(currentDate.setFullYear(currentDate.getFullYear()-1))
    try{
            const data=await User.aggregate([
            {$match:{createdAt:{$gte:lastYear}}},
            {$project:{
                month:{$month:"$createdAt"},
            },
            }
            ,{
                $group:{
                    _id:"$month",
                    total:{$sum:1},
                }
            }
             ]);
             res.status(200).json(data);
    }catch(err){
        res.status(500).json(err)
    }
   
})
module.exports=router;








