import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllProductsFromServer } from "../productApi";


const TRY = () => {
    const navigate = useNavigate();
    let [products, setProducts] = useState([]);
    let currentUser = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        getAllProductsFromServer()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                alert("Failed to fetch data from server");
                console.log(err);
            });
    }, []);
    const handleOnDelete = () => {
        getAllProductsFromServer().then((res) => {
            setProducts(res.data);
        })
            .catch((err) => {
                alert("Failed to update product list");
                console.log(err);
            });
    }
    return (<>
        <MDBContainer fluid className="my-5 text-center">
            <h4 className="mt-4 mb-5">
                <strong>Bestsellers</strong>
            </h4>
            <MDBRow>

                <MDBCol md="12" lg="4" className="mb-4">
                    <MDBCard>
                        <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom" >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                                fluid
                                className="w-100"
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge bg-primary ms-2">New</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-3">Product name</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">$61.99</h6>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6" lg="4" className="mb-4">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom"
                        >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                fluid
                                className="w-100"
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge bg-success ms-2">Eco</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-3">Product name</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">$61.99</h6>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6" lg="4" className="mb-4">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom"
                        >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
                                fluid
                                className="w-100"
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge bg-danger ms-2">-10%</span>
                                        </h5>
                                    </div>
                                </div>
                                <div class="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-3">Product name</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">
                                <s>$61.99</s>
                                <strong className="ms-2 text-danger">$50.99</strong>
                            </h6>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="12" lg="4" className="mb-4">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom"
                        >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
                                fluid
                                className="w-100"
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge bg-success ms-2">Eco</span>
                                            <span className="badge bg-danger ms-2">-10%</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-3">Product name</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">
                                <s>$61.99</s>
                                <strong className="ms-2 text-danger">$50.99</strong>
                            </h6>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6" lg="4" className="mb-4">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom"
                        >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
                                fluid
                                className="w-100"
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div class="d-flex justify-content-start align-items-end h-100"></div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-3">Product name</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">$61.99</h6>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6" lg="4" className="mb-4">
                    <MDBCard>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom"
                        >
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
                                fluid
                                className="w-100"
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div class="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge bg-primary ms-2">New</span>
                                            <span className="badge bg-success ms-2">Eco</span>
                                            <span className="badge bg-danger ms-2">-10%</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-3">Product name</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">
                                <s>$61.99</s>
                                <strong className="ms-2 text-danger">$50.99</strong>
                            </h6>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {products.map((item) => (
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard>
                            <MDBRipple>
                                <MDBCardImage
                                    src={item.imgUrl}
                                    fluid
                                    className="w-100"
                                />
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge bg-primary ms-2">New</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    ></div>
                                </div>
                            </MDBRipple>
                            <MDBCardBody>
                            <a href="#!" className="text-reset">

                            <h5 className="card-title mb-3">{item.name}</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p>Category</p>
                            </a>
                            <h6 className="mb-3">$61.99</h6>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol >
                ))}

            </MDBRow>


        </MDBContainer>

    </>);
}

export default TRY;