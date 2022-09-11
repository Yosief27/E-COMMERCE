const jwt= require("jsonwebtoken");


const verifyToken=(req, res, next)=>{
    
    const authtoken=req.headers.token;
    if(authtoken){
    const token=authtoken.split(" ")[1];
    jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
        if(err)
        { res.status(403).json('wrong token')}
        else{
            //creating a new property on the requist with a user name and assign the user we get from jsonwebtoken verfiy function
            req.user=user;
            
        }
            next();
     })
}else{
    res.status(403).json("You are not authenticated")
}
}
const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user._id===req.params.id||req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You don't have enough authorization for this operation!!!")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You do not have enough cridential!")
        }
    })
}
module.exports={
                verifyToken,
                verifyTokenAndAuthorization,
                verifyTokenAndAdmin
            }