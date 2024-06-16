
const OtherNav = () => {

    return (<>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-light gradient-custom">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler text-black"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
  
          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <h4 className="pt-1 mb-1">MDB</h4>
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
  
          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <span className="text-reset me-3 cursor-pointer color-black">
              {/* <i style={{ cursor: "pointer" }} onClick={() => navigate("/basket")} className="fas fa-shopping-cart text-black"></i> */}
            </span>
  
            {/* <!-- Notifications --> */}
            <div className="dropdown">
              <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bell text-white"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a className="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
    )
  }

  

// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const handleSignUp = () => {
//   const user = {
//     firstName, lastName, email, password
//   };
//   sighnUp(user)
//     .then((response) => {
//       const newUser = response.data;
//       dispatch(setCurrentUser(newUser));
//       // Optionally, you can redirect the user to another page after signup
//       NavigateNext('/list');
//     }).catch((error) => {
//       console.error('signup failed', error);
//     });
const Func = () => {
    const navigate = useNavigate()
  
     let [emptyUser, setEmptyUser] = useState({ id: 0, "name": "", "email": "", "password": "" })
    const change = (e) => {
      setEmptyUser({ ...emptyUser, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch();
  
    const save = () => {
      // e.preventDefault();
      sighnUp(emptyUser)
        .then((res) => {
          dispatch(setCurrentUser(res.data))
          console.log(res.data);
          navigate("/list");
        })
        .catch((err) => {
          console.log('signup failed', err.message);
          alert("add failed");
        })
    }
    return (<>
      <MDBContainer fluid>
  
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create your account</p>
  
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' name='name' onChange={change} />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' name='email' onChange={change} />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form3' type='password' name='password' onChange={change} />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Repeat your password' id='form4' type='password' />
                </div>
  
                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
  
                <MDBBtn className='mb-4' size='lg' onClick={save}>Register</MDBBtn>
  
              </MDBCol>
  
              {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
          <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
        </MDBCol> */}
  
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
  
        <MDBRow>
  
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
  
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Welcome! <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>Create your account</span>
            </h1>
  
            <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
  
            </p>
  
          </MDBCol>
  
          <MDBCol md='6' className='position-relative'>
  
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
  
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                  </MDBCol>
  
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                  </MDBCol>
                </MDBRow>
  
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />
  
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>
  
                <MDBBtn onClick={save} className='w-100 mb-4' size='md'>sign up</MDBBtn>
  
                <div className="text-center">
  
                  <p>or sign up with:</p>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm" />
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm" />
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm" />
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm" />
                  </MDBBtn>
  
                </div>
  
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    </>)
  }