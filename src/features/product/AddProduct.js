import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from './productApi';
import './addProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
//npm install react-bootstrap bootstrap

function AddProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "", description: "", imgUrl: "", price: 0,
        qty: 0, manufatureDate: "", updateType: "updateDetails"
    });
    const [showModel, setShowModel] = useState(false);
    const [modelMessage, setModelMessage] = useState('');


    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const saveProduct = async() => {
        try {
            const newProduct = await addProduct(product);
            console.log(newProduct);
            navigate("/list");
        }
        catch (err) {
            if (err.response && err.response.status === 409) {
                setModelMessage("Product already exists. Would you like to update details or stock?");
                setShowModel(true);
            } else {
                console.error('Failed to add product', err);
            }
        };
    }

    const handleModalChoice = (choice) => {
        setShowModel(false);
        setProduct({ ...product, updateType: choice });
        saveProduct(); // Call saveProduct again with the chosen updateType
    };

    return (

        <section className="vh-100 background-clip">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add New Product</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className="form-control"
                                                        name="name"
                                                        value={product.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="name">Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="description"
                                                        className="form-control"
                                                        name="description"
                                                        value={product.description}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="description">Description</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="imgUrl"
                                                        className="form-control"
                                                        name="imgUrl"
                                                        value={product.imgUrl}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="imgUrl">Image Url</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="number"
                                                        id="price"
                                                        className="form-control"
                                                        name="price"
                                                        value={product.price}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="price">Price</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-calendar-alt fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="date"
                                                        id="manufactureDate"
                                                        name="manufactureDate"
                                                        className="form-control"
                                                        value={product.manufactureDate}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="manufactureDate">Manufacture Date</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-box fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="number"
                                                        id="stock"
                                                        name="stock"
                                                        className="form-control"
                                                        value={product.stock}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="stock">Stock</label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={saveProduct} type="button" className="btn btn-primary btn-lg">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModel} onHide={() => setShowModel(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Product Exists</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modelMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModalChoice('updateDetails')}>Update Details</Button>
                    <Button variant="primary" onClick={() => handleModalChoice('updateStock')}>Update Stock</Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default AddProduct;
