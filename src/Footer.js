import './main_styles.css'
const Footer = () => {
    return ( <>
     	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="footer_logo"><>Unmasked</></div>
					<nav className="footer_nav">
						<ul>
							<li><a href="index.html">home</a></li>
							<li><a href="categories.html">clothes</a></li>
							<li><a href="categories.html">accessories</a></li>
							<li><a href="contact.html">contact</a></li>
						</ul>
					</nav>
					<div className="footer_social">
						<ul>
							<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-reddit-alien" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						</ul>
					</div>
					<div className="copyright">
Copyright &copy; All rights reserved
				</div></div>
			</div>
		</div>
        
<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="plugins/colorbox/jquery.colorbox-min.js"></script>
<script src="js/custom.js"></script>
	</footer>
    </> );
}
 
export default Footer;