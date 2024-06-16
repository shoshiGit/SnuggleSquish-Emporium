import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductList from "./features/product/ProductList";
import NavBar from "./NavBar";
import ProductDetails from "./features/product/ProductDetails";
import SignUp from "./features/user/SingUp";
import Login from "./features/user/Login";
import SmallBasket from "./features/order/SmallBasket";
import Basket from "./features/order/Basket";
import OrderDetails from "./features/order/OrderDetails"
import Wishlist from "./features/order/Wishlist";
import Home from "./Home";
import UpdateProduct from "./features/product/UpdateProduct";
import AddProduct from "./features/product/AddProduct";
import Footer from "./Footer";

//npm i mdb-react-ui-kit
//npm i @fortawesome/fontawesome-free
//npm i --save mdb-react-ui-kit 
//npm install @mui/material @emotion/react @emotion/styled      
//npm install @mui/icons-material      
//npm install bootstrap

function App() {
  const [currentUser, setCurrentUser] = useState('');
  if (currentUser) {
    console.log(currentUser)
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="update-product" element={<UpdateProduct />} />
        <Route path="list" element={<ProductList />}>
          <Route path=":id" one element={<ProductDetails />} />
        </Route>
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="basket" element={<Basket />} />
        <Route path="SmallBasket" element={<SmallBasket />} />
        <Route path="orderDetails" element={<OrderDetails />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;