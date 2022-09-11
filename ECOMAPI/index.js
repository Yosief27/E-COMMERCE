const express=require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv");
const routerUser=require('./routes/user');
const routerAuth=require('./routes/auth');
const routerProduct=require('./routes/product');
const routerOrder=require('./routes/order');
const routerCart=require('./routes/cart');
const routerStripe=require('./routes/stripe');
const cors=require('cors')

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
                .then(()=>console.log("successfully loging in to DB!!!"))
                .catch(err=>console.log(err));
const app=express();

app.listen(3003,()=>{
    console.log('Server is up and running and listening at port 3003');
    

})
app.use(cors());
//creating a rest api 
//to convert upcoming responses to a json object
app.use(express.json());
app.use('/api/users',routerUser);
app.use('/api/auths',routerAuth);
app.use('/api/products',routerProduct);
app.use('/api/carts',routerCart);
app.use('/api/orders',routerOrder);
app.use('/api/stripe',routerStripe);