import Link from "next/link"

export default function Footer2() {
	return (
		<>
			<footer
				className="footer-section bg-cover bg-cover"
				style={{ backgroundImage: 'url("assets/img/footer/bg.jpg")' }}
			>
				<div className="container">
					<div className="contact-info-area">
						<Link href="/"
							className="logo-img wow fadeInUp"
							data-wow-delay=".2s"
						>
							<img src="/assets/img/logo/black-logo.svg" alt="img" />
						</Link>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="icon">
								<i className="fa-sharp fa-solid fa-location-dot" />
							</div>
							<div className="content">
								<p>Office location</p>
								<h3>4648 Rocky, New York</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="icon">
								<i className="fa-solid fa-envelope" />
							</div>
							<div className="content">
								<p>send email</p>
								<h3>
									<Link href="/mailto:example@gmail.com">example@gmail.com</Link>
								</h3>
							</div>
						</div>
						<div
							className="contact-info-items wow fadeInUp"
							data-wow-delay=".8s"
						>
							<div className="icon">
								<i className="fa-solid fa-phone-volume" />
							</div>
							<div className="content">
								<p>call emergency</p>
								<h3>
									<Link href="/tel:+88012365499">+88 0123 654 99</Link>
								</h3>
							</div>
						</div>
					</div>
					<div className="footer-widgets-wrapper">
						<div className="row">
							<div
								className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>About Company</h5>
									</div>
									<div className="footer-content">
										<p>
											Nullam interdum libero vitae pretium aliquam <br />
											donec nibh purus laoreet in ullamcorper vel <br />
											malesuada sit amet enim.
										</p>
										<div className="social-icon d-flex align-items-center">
											<Link href="/#">
												<i className="fab fa-facebook-f" />
											</Link>
											<Link href="/#">
												<i className="fab fa-twitter" />
											</Link>
											<Link href="/#">
												<i className="fab fa-youtube" />
											</Link>
											<Link href="/#">
												<i className="fab fa-linkedin-in" />
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div
								className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
								data-wow-delay=".4s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Quick Link</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link href="/about">
												<i className="fa-solid fa-chevrons-right" />
												About Us
											</Link>
										</li>
										<li>
											<Link href="/contact">
												<i className="fa-solid fa-chevrons-right" />
												Contact Us
											</Link>
										</li>
										<li>
											<Link href="/news">
												<i className="fa-solid fa-chevrons-right" />
												Blog &amp; News
											</Link>
										</li>
										<li>
											<Link href="/faq">
												<i className="fa-solid fa-chevrons-right" />
												FAQ’S
											</Link>
										</li>
										<li>
											<Link href="/contact">
												<i className="fa-solid fa-chevrons-right" />
												Login / Register
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".6s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Our Services</h5>
									</div>
									<ul className="list-area">
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												What We Do
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Request a Freight
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Track &amp; Trace
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Rail Freight
											</Link>
										</li>
										<li>
											<Link href="/service-details">
												<i className="fa-solid fa-chevrons-right" />
												Maritime Transport
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
								data-wow-delay=".8s"
							>
								<div className="single-footer-widget">
									<div className="widget-head">
										<h5>Instagram</h5>
									</div>
									<div className="footer-gallery">
										<div className="gallery-wrap">
											<div className="gallery-item">
												<div className="thumb">
													<Link href="/assets/img/footer/gallery-1.jpg"
														className="img-popup"
													>
														<img
															src="/assets/img/footer/gallery-1.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link href="/assets/img/footer/gallery-2.jpg"
														className="img-popup"
													>
														<img
															src="/assets/img/footer/gallery-2.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link href="/assets/img/footer/gallery-3.jpg"
														className="img-popup"
													>
														<img
															src="/assets/img/footer/gallery-3.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
											</div>
											<div className="gallery-item">
												<div className="thumb">
													<Link href="/assets/img/footer/gallery-4.jpg"
														className="img-popup"
													>
														<img
															src="/assets/img/footer/gallery-4.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link href="/assets/img/footer/gallery-5.jpg"
														className="img-popup"
													>
														<img
															src="/assets/img/footer/gallery-5.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
												<div className="thumb">
													<Link href="/assets/img/footer/gallery-6.jpg"
														className="img-popup"
													>
														<img
															src="/assets/img/footer/gallery-6.jpg"
															alt="gallery-img"
														/>
														<div className="icon">
															<i className="far fa-plus" />
														</div>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>
							© All Copyright {new Date().getFullYear()} by{" "}
							<Link href="/">Trastek</Link>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
