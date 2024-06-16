
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SmallBasket = () => {

    const basketItems = useSelector((state) => state.order.basket);
    console.log(basketItems);

    const navigate = useNavigate()
    const [totalItems, setTotalItems] = useState(0)
    const calculateTotalItems = () => {
        let items = 0;
        basketItems.forEach((i) => {
            items += i.qty;
        });
        return items;
    };

    useEffect(() => {
        setTotalItems(calculateTotalItems());
    }, [basketItems]);

    return (
        <div className="small-basket-sidebar" >
            <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <p><span class="h2">Shopping Cart </span>
                                <br />
                                <span class="h4">({totalItems} {totalItems == 1 ? "item" : "items"} in your cart)</span>
                            </p>
                            {basketItems?.map((item, index) => (<>
                                <p key={index}>{item.name}</p>
                                <div class="card mb-4">
                                    <div class="card-body p-4">
                                        <div class="row align-items-center">
                                            <div class="col-md-2">
                                                <img src={item.imgUrl}
                                                    class="img-fluid" alt="Generic placeholder image" />
                                            </div>
                                            <div class="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p class="small text-muted mb-4 pb-2">Name</p>
                                                    <p class="lead fw-normal mb-0">{item.name}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p class="small text-muted mb-4 pb-2">Color</p>
                                                    <p class="lead fw-normal mb-0"><i class="fas fa-circle me-2" style={{ color: "#fdd8d2" }}></i>
                                                        {item.color}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p class="small text-muted mb-4 pb-2">Quantity</p>
                                                    <p class="lead fw-normal mb-0">{item.qty}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p class="small text-muted mb-4 pb-2">Price</p>
                                                    <p class="lead fw-normal mb-0">${item.price}</p>
                                                </div>
                                            </div>
                                            <div class="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p class="small text-muted mb-4 pb-2">Total</p>
                                                    <p class="lead fw-normal mb-0">${item.price * item.qty}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>))}

                            <div class="card mb-5">
                                <div class="card-body p-4">
                                    <div class="float-end">
                                        <p class="mb-0 me-5 d-flex align-items-center">
                                            <span class="small text-muted me-2">Order total:</span> <span
                                                class="lead fw-normal">$799</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn btn-light btn-lg me-2" onClick={() => navigate("/list")}>Continue shopping</button>
                                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/basket")}>Go to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SmallBasket;
