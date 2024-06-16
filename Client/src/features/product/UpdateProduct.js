import { useForm } from "react-hook-form";
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBCard, MDBCardTitle, MDBCardBody } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      imgUrl: "",
      description: "",
      qty: 0,
      price: 0,
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Perform any additional actions here, such as updating the product
    // and then navigate to the desired route.
    navigate("/list");
  };

  return (
    <MDBCard className="d-flex justify-content-center">
      <MDBCardBody className="d-flex justify-content-center">
        <form id="form" className="text-center" style={{ textAlign: "center", alignContent: "center", alignItems: "center", alignSelf: "center", width: '100%', maxWidth: '300px' }} onSubmit={handleSubmit(onSubmit)}>
          <MDBRow className="mb-4">
            <MDBCol md="100">
              <MDBCardTitle className="text-center mb-3">Update Product</MDBCardTitle>
            </MDBCol>
            <MDBCol md="600">
              <MDBInput label="Name" name="name" control={control} wrapperClass="mb-4" />
            </MDBCol>
               <MDBCol md="30">
              <MDBInput label="Description" name="description" control={control} wrapperClass="mb-4" />
            </MDBCol>
            <MDBCol md="50">
              <MDBInput label="ImgURL" name="imgUrl" control={control} wrapperClass="mb-4" />
            </MDBCol>
            <MDBCol md="100">
              <MDBInput type="number" label="Price" name="price" control={control} />
            </MDBCol></MDBRow>
          <MDBRow ><MDBCol className="d-flex justify-content-center">
              <MDBCheckbox name="confirm" label="Confirm" control={control} wrapperClass="d-flex justify-content-center" />
            </MDBCol>
          </MDBRow>
          <MDBRow><MDBCol className="d-flex justify-content-center">
              <MDBBtn color="primary" block className="my-3" type="submit">
                Send
              </MDBBtn>
            </MDBCol></MDBRow>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
}

export default UpdateProduct;
