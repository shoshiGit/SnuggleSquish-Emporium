
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "./productApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart, isInCart } from "../order/orderSlice";

const ProductDetails = () => {

  const [productD, setProductD] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProductD(response.data);
      } catch (err) {
        alert("Failed to fetch data from server.");
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addtoCart(productD));
  };

  return (
    <div style={{ backgroundColor: "#00000029", position: "fixed", top: 0, width: "100vw", height: "100vh",
        display: "flex", justifyContent: "center", alignItems: "center",
      }}>
      <div style={{ backgroundColor: "white", width: "50%" }}>
        details
        <p>{productD["name"]}</p>
      </div>
      <button onClick={() => {
        navigate(-1)
      }}>back</button>
      <button disabled={!isInCart(productD.id)} onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;