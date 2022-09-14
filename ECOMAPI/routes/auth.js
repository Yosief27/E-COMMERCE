const router=require('express').Router();
const User=require('../models/User')
const CryptoJs=require('crypto-js')
const jwt=require('jsonwebtoken');

router.post('/register',async (req,res)=>{
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString()
        
    })
  try{
    const resultUser=await newUser.save() 
    res.status(201).json(resultUser);
  }catch(err){
    console.log("error")
    res.status(500).json(err.message||err)
  } 


})
//LOGIN 
router.post('/login',async(req,res)=>{
    try{
      //seraching from the database
        const user=await User.findOne({username:req.body.username});

        //check of there is a user exsits
        !user && res.status(400).json('Please provide a valued user name')
        const hashedPassword=CryptoJs.AES.decrypt(user.password,process.env.PASS_SEC);
        const newPword=hashedPassword.toString(CryptoJs.enc.Utf8);

        //check for user password
        newPword!==req.body.password &&
          res.status(400).json("Wrong password!");
        //asign a token to each login session and send to the client
        const newToken= jwt.sign({"_id":user._id,"isAdmin":user.isAdmin},process.env.JWT_SEC,{expiresIn:"2d"})
        const { password, ...others}=user._doc;
        res.status(200).json({...others,newToken})
    
        
        
    }
    catch(err){
        res.status(500).json(err.message||err)
    }
}
)
module.exports=router;