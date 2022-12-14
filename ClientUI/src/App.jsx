import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from "react-router-dom";
const App = () => {
const user=true;

return (
    <Router>
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route path="/products/:category" element={<ProductList/>}/> 
            <Route  path="/product/:id" element ={<Product/>}/>
            <Route  path="/cart" element ={<Cart/>}/>
            <Route  path="/register" element ={user ? <Navigate to="/"/>:<Register/>}/>
            <Route  path="/login" element={user ? <Navigate to="/" />:<Login/>} >
            </Route>
        </Routes>
    </Router>
);
};

export default App; 