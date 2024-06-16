import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setOrders, updateQuantity } from "./orderSlice";
import { getOrdersFromServer } from "./orderApi";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBListGroup, MDBListGroupItem, MDBRipple, MDBRow, MDBTooltip, MDBTypography } from "mdb-react-ui-kit";

export default function Basket() {
    
    const dispatch = useDispatch();
    const basketItems = useSelector((state) => state.order.basket);
    const [totalAmount, setTotalAmount] = useState();
    const [totalItems, setTotalItems] = useState(); // Added state for total items

    const handleUpdateQuantity = (itemId, newQuantity) => {
        dispatch(updateQuantity({ itemId, newQuantity }));   // Dispatch the updateQuantity action
    };

    useEffect(() => {
        let total = 0;
        let items = 0;
        basketItems.forEach((item) => {
            total += item.price * item.qty;
            items += item.qty;
        });
        setTotalItems(items);
        setTotalAmount(total);
    }, [basketItems]);

    useEffect(() => {
        getOrdersFromServer().then((response) => {
            dispatch(setOrders(response.data));
        }).catch((error) => {
            console.log("error fetching orders", error);
        });
    }, [dispatch]);

    return (
        <section className="h-100 gradient-custom">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center my-4">
                    <MDBCol md="8">
                        <MDBTypography tag="h5">
                            <Link to="/list" className="text-body">
                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue shopping
                            </Link>
                        </MDBTypography>
                        <hr />
                        <MDBCard className="mb-4">
                            <MDBCardHeader className="py-3">
                                <MDBTypography tag="h5" className="mb-0">
                                    Cart - {totalItems} {totalItems == 1 ? "item" : "items"}
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                {basketItems.map((item) => (
                                    <MDBRow key={item.id}>
                                        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                            <MDBRipple rippleTag="div" rippleColor="light" className="bg-image rounded hover-zoom hover-overlay">
                                                <img src={item.imgUrl} alt={item.name} className="w-100" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                    </div>
                                                </a>
                                            </MDBRipple>
                                        </MDBCol>
                                        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                            <p>
                                                <strong>{item.name}</strong>
                                            </p>
                                            <p>Color: blue</p>
                                            <p>Size: M</p>
                                            <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2" title="Remove item">
                                                <MDBIcon fas icon="trash" />
                                            </MDBTooltip>
                                            <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                                                title="Move to the wish list">
                                                <MDBIcon fas icon="heart" />
                                            </MDBTooltip>
                                        </MDBCol>
                                        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                <MDBBtn className="px-3 me-2"
                                                    onClick={() => handleUpdateQuantity(item.id, item.qty - 1)}
                                                >
                                                    <MDBIcon fas icon="minus" />
                                                </MDBBtn>
                                                <MDBInput
                                                    value={item.qty}
                                                    defaultValue={1}
                                                    min={0}
                                                    type="number"
                                                    label="Quantity"
                                                    onChange={(e) =>
                                                        handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
                                                    }
                                                />
                                                <MDBBtn className="px-3 ms-2" onClick={() => handleUpdateQuantity(item.id, item.qty + 1)}>
                                                    <MDBIcon fas icon="plus" />
                                                </MDBBtn>
                                            </div>
                                            <p className="text-start text-md-center">
                                                <strong>${item.price * item.qty}</strong>
                                            </p>
                                        </MDBCol>
                                        <hr className={`my-${item.name}`} />
                                    </MDBRow>
                                ))}
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <p>
                                    <strong>Expected shipping delivery</strong>
                                </p>
                                <p className="mb-0">12.10.2020 - 14.10.2020</p>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody>
                                <p>
                                    <strong>We accept</strong>
                                </p>
                                <MDBCardImage className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" />
                                <MDBCardImage className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                    alt="American Express" />
                                <MDBCardImage className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" />
                                <MDBCardImage className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                    alt="PayPal acceptance mark" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBCard className="mb-4">
                            <MDBCardHeader>
                                <MDBTypography tag="h5" className="mb-0">
                                    Summary
                                </MDBTypography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>${totalAmount}</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>$0</span>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem
                                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            {/* <strong><p className="mb-0">(including VAT)</p></strong> */}
                                        </div>
                                        <span><strong>${totalAmount}</strong></span>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                                <Link to="/orderDetails" className="text-white text-decoration-none">
                                    <MDBBtn block size="lg">
                                        Go to checkout
                                    </MDBBtn></Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}