const router=require("express").Router();
const CryptoJS=require('crypto-js')
const Product=require('../models/Product')
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}=require('./Middleware/verifyToken')

//Create Product only admin can create products
router.post('/',verifyTokenAndAdmin,async (req,res)=>{
    const newProduct=new Product(req.body);
    try{
        const createdProduct=await newProduct.save()
        res.status(200).json(createdProduct);

    }catch(err){
        res.status(500).json(err)
    }
})
router.put('/:id',verifyTokenAndAdmin,async (req,res)=>{
    try{
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        //the new :true object property is need to send with the updated user input.
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)

    }
})
//Delete product api
router.delete('/:id',verifyTokenAndAdmin, async (req,res)=>{

        console.log("before err"+req.params.id);
     try{
     console.log(req.params.id);
     const deleteProduct= await Product.findByIdAndDelete(req.params.id);
     res.status(200).json("Product successfully deleted.")
     } catch(err){
        console.log("from err"+req.params.id);
        res.status(500).json(err)
     }       

})
//Get product by id 
router.get('/find/:id', async (req,res)=>{
     try{

     const product= await Product.findById(req.params.id);
     const {_id,...others}=product._doc
     res.status(200).json(otherDetail)


     } catch(err){
        res.status(500).json(err)
     }       
})
// Get all users
router.get('/', async (req,res)=>{
     //if we need only top new user rather than all
     // where the new is a query word is provided on the url with ?new="man" or ?category="summer"
    
     const query=req.query.new;
     const catquery=req.query.catgory;
     try{
        let products;
        if(query){
            products=await Product.find().sort({createdAt:-1}).limit(3);
        }else if(catquery){
            products=await Product.find({
                categories:{
                    $in:[catquery],
                },
            });
        }else{
            console.log("inside the else block")
            products=await Product.find();
        }
        res.status(200).json(products)


     } catch(err){
        res.status(500).json(err)
     }       

})


module.exports=router;








