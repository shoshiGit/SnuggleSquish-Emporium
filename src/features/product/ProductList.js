import { useEffect, useState } from "react";
import { getAllProductsFromServer } from "./productApi";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OneProduct from "./OneProduct";
import "./productList.css"

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [sortOption, setSortOption] = useState('');



  let num = useSelector((state) => state.product.numberOfPages);//הולך להביא מספר עמודים מהסטייט הכללי
  let currentPage = useSelector((state) => state.product.currentPageOnSite);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const handleRefresh = () => { setRefreshFlag(!refreshFlag); };
  const handlePageChange = (event, page) => {
    dispatch(saveCurrentPageOnSiteToState(page))
  };
  const fetchNumPages = async () => {
    // הולך לשרת להביא מספר עמודים
    // Round up the data
    //ממלא את הסטייט הכללי 
  }




  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    fetchProducts();
  }, [searchItem, sortOption, page, limit]);


  //פונקציה שמביאה בפועל את המוצרים לפי עמוד
  const fetchProducts = async () => {
    try {
      const res = await getAllProductsFromServer({ searchItem, sortOption, page, limit });
      setProducts(res.data.products);
    } catch (err) {
      alert("Failed to fetch data from server");
      console.log(err);
    }
  };

  const handleOnDelete = () => {
    fetchProducts();
  }
  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };
  const handleSortOption = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <>

      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <h1 className="mb-4">Soft Toys</h1>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4 align-items-center" >
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="Search"
                      aria-describedby="search-icon-1"
                      value={searchItem}
                      onChange={handleSearchChange} />
                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                  </div>
                </div>
                <div className="col-6"></div>
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Default Sorting:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      value={sortOption}
                      onChange={handleSortOption}
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                    >
                      <option value="">Nothing</option>
                      <option value="popularity">Popularity</option>
                      <option value="price">Price</option>
                      <option value="a-z">A-B</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                {console.log(products)}
                {/* <div className="col-lg-9"> */}
                <div className="row g-4 justify-content-center">
                  {products.map((item) => (
                    <OneProduct key={item.id} className={item} onDelete={handleOnDelete} product={item} />
                  ))}
                  <Outlet />
                  {currentUser && currentUser.role == "admin" && (
                    <button className="btn btn-primary" onClick={() => navigate("/addProduct")} >Add Product</button>
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
