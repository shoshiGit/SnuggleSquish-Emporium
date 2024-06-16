import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBRipple, MDBRow } from "mdb-react-ui-kit";
import { Link, useNavigation } from "react-router-dom";

const OneProductB = ({ product, onDelete }) => {
    // const navigate = useNavigation();
<>

        {/* <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
                <MDBRipple>
                    <div className="" style={{ maxHeight:'300px',overflow: 'hidden' }}>
                        <MDBCardImage src={product.imgUrl} alt={product.name} fluid className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                                <span className="badge bg-primary ms-2">New</span>
                            </h5>
                        </div>
                    </div>
                    <div className="hover-overlay">
                        <div className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                    </div>
                </MDBRipple>
                <MDBCardBody>
                    <a href="#!" className="text-reset">

                        <h5 className="card-title mb-3">{product.name}</h5>
                    </a>
                    <a href="#!" className="text-reset">
                        <p>Category</p>
                    </a>
                    <h6 className="mb-3">${product.price}</h6>
                </MDBCardBody>
            </MDBCard>
        </MDBCol > */}

    </>;
}

export default OneProductB;