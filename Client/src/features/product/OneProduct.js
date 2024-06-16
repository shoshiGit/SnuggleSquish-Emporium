import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addtoCart, isInCart } from "../order/orderSlice";
import { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SmallBasket from "../order/SmallBasket";
import { deleteP } from "./productApi";
import './oneProduct.css'

const OneProduct = ({ product, onDelete }) => {
  let user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addtoCart(product));
    setOpenSnackbar(true);
    setShowBasket(true);
  };

  const deleteProduct = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteP(product.id);
        alert("Product deleted successfully");
        onDelete();
      } catch (error) {
        alert("Failed to delete product");
        console.error(error);
      }
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBasket(false);
    }, 10000); // 10 seconds in milliseconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col-md-5 col-lg-6 col-xl-4">
      <div className=" rounded  border border-secondary position-relative fruite-item">
        <div className="fruite-img ">
          <Link to={`/${product._id}`}>
            <img src={product.imgUrl} className="img-fluid h-200 w-100 rounded-top" alt={product.name} />
          </Link>
        </div>
        {/* <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
          Fruits
        </div> */}
        <div className="p-4 rounded-bottom">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">${product.price}</p>
            {user && user.role == "ADMIN" ? (
              <>
                <input type="button" onClick={() => navigate(`/update-product/${product.id}`)} value="Edit" />
                <input type="button" onClick={deleteProduct} value="Delete" />
              </>
            ) : <>
              <div className="btn border border-secondary rounded-pill px-3 text-primary" onClick={handleAddToCart} disabled={!isInCart(product.id)}>
                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                Add to cart
              </div>
            </>}

          </div>
        </div>
      </div>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          {product.name} addded to cart
        </Alert>
      </Snackbar>
      {showBasket && <SmallBasket />}
    </div>
  );
};

export default OneProduct;