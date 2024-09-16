
import {   MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrderToServer } from "./orderApi";
import { emptyBasket, setBasket, setOrders } from "./orderSlice";

const OrderDetails = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
let user = useSelector((state) => state.user.currentUser);
const cart = useSelector((state) => state.order.basket);
let orders = useSelector((state)=>state.order.orders);
const calculateTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.qty;
  });
  return total;
};
const  submit = async() =>{
  addOrderToServer(cart)
  .then((res) => {
    console.log(res.data);
    dispatch(emptyBasket([]))
    navigate("/");
  })
  .catch((err) => {
    console.log('failed', err.message);
    alert("failed");
  })
}
  return (  
        <MDBContainer className="py-5 align-center">
          <MDBCard className="p-4">
            <MDBCardBody>
              <MDBContainer className="mb-2 mt-3">
                <MDBRow className="d-flex align-items-baseline">
                  <MDBCol xl="9">
                    <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                      Invoice &gt; &gt; <strong>ID: #123-123</strong>
                    </p>
                  </MDBCol>
                  <MDBCol xl="3" className="float-end">
                    <MDBBtn color="light" ripple="dark" className="text-capitalize border-0">
                      <MDBIcon fas icon="print" color="primary" className="me-1" />
                      Print
                    </MDBBtn>
                    <MDBBtn
                      color="light"
                      ripple="dark"
                      className="text-capitalize border-0 ms-2">
                      <MDBIcon
                        far
                        icon="file-pdf"
                        color="danger"
                        className="me-1"
                      />
                      Export
                    </MDBBtn>
                    <hr />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <MDBContainer>
                <MDBCol md="12" className="text-center">
<MDBCardImage src="../logo.png" style={{ maxBlockSize:'50px'}}></MDBCardImage>
                  <p className="pt-0">unmasked.netlify.app</p>
                </MDBCol>
              </MDBContainer>
              <MDBRow>
                <MDBCol xl="8">
                  <MDBTypography listUnStyled>
                    <li className="text-muted">
                      To: <span style={{ color: "#5d9fc5" }}>{user.name}</span>
                    </li>
                    {/* <li className="text-muted">Street, City</li>
                    <li className="text-muted">State, Country</li> */}
                    <li className="text-muted">
                      <MDBIcon fas icon="email" /> {user.email}
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol xl="4">
                  <p className="text-muted">Invoice</p>
                  <MDBTypography listUnStyled>
                    <li className="text-muted">
                      <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                      <span className="fw-bold ms-1">ID:</span>#123-456
                    </li>
                    <li className="text-muted">
                      <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                      <span className="fw-bold ms-1">Creation Date: </span>{}
                    </li>
                    <li className="text-muted">
                      <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                      <span className="fw-bold ms-1">Status:</span>
                      <span className="badge bg-warning text-black fw-bold ms-1">
                        Unpaid
                      </span>
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
              <MDBRow className="my-2 mx-1 justify-content-center">
                <MDBTable striped borderless>
                  <MDBTableHead
                    className="text-white"
                    style={{ backgroundColor: "#84B0CA" }}>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Description</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {cart.map((item)=>(
                      <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>${item.price}</td>
                      <td>${item.qty*item.price}</td>
                    </tr>
                    ))}
                   
                  </MDBTableBody>
                </MDBTable>
              </MDBRow>
              <MDBRow>
                <MDBCol xl="3">
                  <p className="text-black float-start">
                    <span className="text-black me-3"> Total Amount</span>
                    <span style={{ fontSize: "25px" }}>${calculateTotal()}</span>
                  </p>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol xl="10">
                  <p>Thank you for your purchase</p>
                </MDBCol>
                <MDBCol xl="2">
                  <MDBBtn onClick={submit}className="text-capitalize" style={{ backgroundColor: "#60bdf3" }}>
                    Pay Now
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
}

export default OrderDetails;


// import React from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBRadio,
//   MDBRow,
// } from "mdb-react-ui-kit";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";


// export default function OrderDetails() {
//     const location = useLocation();
  
      
//     const basketItems = useSelector((state) => state.order.basket);
//     const totalAmount = useSelector((state) => state.order.totalAmount || 0);    
//     const dispatch = useDispatch();
//     const orders = useSelector((state) => state.order.orders);
//   return (
//     <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
//       <MDBCard>
//         <MDBCardBody>
//           <MDBRow className="d-flex justify-content-center pb-5">
//             <MDBCol md="7" xl="5" className="mb-4 mb-md-0">
//               <div className="py-4 d-flex flex-row">
//                 <h5>
//                   <span className="far fa-check-square pe-2"></span>
//                   <b>PURIM</b> |
//                 </h5>
//                 <span className="ps-2">Pay</span>
//               </div>
//               <h4 className="text-success">${totalAmount}</h4>

         
//               <div className="pt-2">
//                 <div className="d-flex pb-2">
//                   <div>
//                     <p>
//                       <b>
//                          Balance{" "}
//                         <span className="text-success">$13.24</span>
//                       </b>
//                     </p>
//                   </div>
//                   <div className="ms-auto">
//                     <p className="text-primary">
//                       <MDBIcon
//                         fas
//                         icon="plus-circle"
//                         className="text-primary pe-1"
//                       />
//                       Add payment card
//                     </p>
//                   </div>
//                 </div>
//                 <p>
//                   This is an estimate for the portion of your order (not covered
//                   by insurance) due today . once insurance finalizes their
//                   review refunds and/or balances will reconcile automatically.
//                 </p>
//                 <div className="d-flex flex-row pb-3">
//                   <div className="d-flex align-items-center pe-2">
//                     <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
//                   </div>
//                   <div className="rounded border d-flex w-100 p-3 align-items-center">
//                     <p className="mb-0">
//                       <MDBIcon
//                         fab
//                         icon="cc-visa"
//                         size="lg"
//                         className="text-primary pe-2"
//                       />{" "}
//                       Visa Debit Card
//                     </p>
//                     <div className="ms-auto">************3456</div>
//                   </div>
//                 </div>
//                 <div className="d-flex flex-row pb-3">
//                   <div className="d-flex align-items-center pe-2">
//                     <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
//                   </div>
//                   <div className="rounded border d-flex w-100 p-3 align-items-center">
//                     <p className="mb-0">
//                       <MDBIcon
//                         fab
//                         icon="cc-mastercard"
//                         size="lg"
//                         className="text-dark pe-2"
//                       />{" "}
//                       Mastercard Office
//                     </p>
//                     <div className="ms-auto">************1038</div>
//                   </div>
//                 </div>
//                 <MDBBtn block size="lg">
//                   Proceed to payment
//                 </MDBBtn>
//               </div>
//             </MDBCol>
//             <MDBCol md="5" xl="4" offsetXl="1">
//               {" "}
//               <div className="py-4 d-flex justify-content-end">
//                 <h6>
//                   <a href="#!">Cancel and return to website</a>
//                 </h6>
//               </div>
//               <div
//                 className="rounded d-flex flex-column p-2"
//                 style={{ backgroundColor: "#f8f9fa" }}
//               >
//                 <div className="p-2 me-3">
//                   <h4>Order Recap</h4>
//                 </div>
//                 <div className="p-2 d-flex">
//                   <MDBCol size="8">Contracted Price</MDBCol>
//                   <div className="ms-auto">$186.76</div>
//                 </div>
//                 <div className="p-2 d-flex">
//                   <MDBCol size="8">Amount toward deductible</MDBCol>
//                   <div className="ms-auto">$0.00</div>
//                 </div>
//                 <div className="p-2 d-flex">
//                   <MDBCol size="8">Coinsurance(0%)</MDBCol>
//                   <div className="ms-auto">+ $0.00</div>
//                 </div>
//                 <div className="p-2 d-flex">
//                   <MDBCol size="8">Copayment</MDBCol>
//                   <div className="ms-auto">+ $40.00</div>
//                 </div>
//                 <div className="border-top px-2 mx-2"></div>
//                 <div className="p-2 d-flex pt-3">
//                   <MDBCol size="8">
//                     Total Deductible, Coinsurance, and Copay
//                   </MDBCol>
//                   <div className="ms-auto">$40.00</div>
//                 </div>
//                 <div className="p-2 d-flex">
//                   <MDBCol size="8">
//                     Maximum out-of-pocket on Insurance Policy (not reached)
//                   </MDBCol>
//                   <div className="ms-auto">$6500.00</div>
//                 </div>
//                 <div className="border-top px-2 mx-2"></div>
//                 <div className="p-2 d-flex pt-3">
//                   <MDBCol size="8">Insurance Responsibility</MDBCol>
//                   <div className="ms-auto">
//                     <b>$71.76</b>
//                   </div>
//                 </div>
//                 <div className="p-2 d-flex">
//                   <MDBCol size="8">
//                     Patient Balance{" "}
//                     <span className="fa fa-question-circle text-dark"></span>
//                   </MDBCol>
//                   <div className="ms-auto">
//                     <b>$71.76</b>
//                   </div>
//                 </div>
//                 <div className="border-top px-2 mx-2"></div>
//                 <div className="p-2 d-flex pt-3">
//                   <MDBCol size="8">
//                     <b>Total</b>
//                   </MDBCol>
//                   <div className="ms-auto">
//                     <b className="text-success">$85.00</b>
//                   </div>
//                 </div>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// }