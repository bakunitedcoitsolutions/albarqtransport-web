import React from "react"
import Link from "next/link"

export default function ServiceDetails1() {
	return (
		<>
			<section className="service-details-section section-padding">
				<div className="container">
					<div className="service-details-wrapper">
						<div className="row g-4">
							<div className="col-12 col-lg-8">
								<div className="service-details-image">
									<img src="/assets/img/service/details-1.jpg" alt="img" />
								</div>
								<div className="service-details-content">
									<h2>Road Transport</h2>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable. If you are going to use a
										passage of Lorem Ipsum, you need to be sure there isn't
										anything embarrassing hidden in the middle of text.{" "}
									</p>
									<p className="mt-4 mb-4">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable. If you are going to use a
										passage of Lorem Ipsum,
									</p>
									<div className="row g-4">
										<div className="col-lg-7">
											<div className="service-details-image">
												<img src="/assets/img/service/details-2.jpg" alt="img" />
											</div>
										</div>
										<div className="col-lg-5">
											<div className="content">
												<h3>Services Benefits:</h3>
												<p className="mt-2 mb-2">
													There are many Trastek h variations of passages of
													Lorem Ipsum available,
												</p>
												<p>
													Trastek h variations of be passages of Lorem Ipsum
													available,
												</p>
											</div>
											<ul className="details-list">
												<li>
													<i className="fa-solid fa-circle-check" />
													We use the latest diagnostic equipment
												</li>
												<li>
													<i className="fa-solid fa-circle-check" />
													Automotive service our clients receive
												</li>
												<li>
													<i className="fa-solid fa-circle-check" />
													We use the latest diagnostic equipment
												</li>
											</ul>
										</div>
									</div>
									<h4>3 Simple Steps to Process</h4>
									<p className="mt-3">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable. If you are going to use a
										passage of Lorem Ipsum,
									</p>
									<div className="row g-4 mt-2">
										<div className="col-xl-4 col-lg-6 col-md-6">
											<div className="service-details-box">
												<div className="icon">
													<img src="/assets/img/icon/15.svg" alt="img" />
													<h5>Planning</h5>
												</div>
												<p>
													There are many Trastek a variations of passages of
													Lorem Ipsum{" "}
												</p>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-6">
											<div className="service-details-box">
												<div className="icon">
													<img src="/assets/img/icon/16.svg" alt="img" />
													<h5>Design</h5>
												</div>
												<p>
													There are many Trastek a variations of passages of
													Lorem Ipsum{" "}
												</p>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-6">
											<div className="service-details-box">
												<div className="icon">
													<img src="/assets/img/icon/17.svg" alt="img" />
													<h5>Get Paid</h5>
												</div>
												<p>
													There are many Trastek a variations of passages of
													Lorem Ipsum{" "}
												</p>
											</div>
										</div>
									</div>
									<p className="mt-1 pt-4">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable. If you are going to use a
										passage of Lorem Ipsum,
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="main-sidebar">
									<div className="single-sidebar-widget">
										<div className="search-widget">
											<form action="#">
												<input type="text" placeholder="Search" />
												<button type="submit">
													<i className="fa-solid fa-magnifying-glass" />
												</button>
											</form>
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Categories</h3>
										</div>
										<div className="news-widget-categories">
											<ul>
												<li>
													<Link href="/service-details">Building </Link>{" "}
													<span>
														<i className="fa-regular fa-arrow-right-long" />
													</span>
												</li>
												<li>
													<Link href="/service-details">Construction</Link>
													<span>
														<i className="fa-regular fa-arrow-right-long" />
													</span>
												</li>
												<li className="active">
													<Link href="/service-details">Factory</Link>
													<span>
														<i className="fa-regular fa-arrow-right-long" />
													</span>
												</li>
												<li>
													<Link href="/service-details">Industry</Link>{" "}
													<span>
														<i className="fa-regular fa-arrow-right-long" />
													</span>
												</li>
												<li>
													<Link href="/service-details">Real Estate</Link>{" "}
													<span>
														<i className="fa-regular fa-arrow-right-long" />
													</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="single-sidebar-widget">
										<div className="wid-title">
											<h3>Download</h3>
										</div>
										<div className="brochures-download-items">
											<div className="brochures-items">
												<div className="icon">
													<i className="fal fa-file-pdf" />
												</div>
												<div className="content">
													<h5>Our Brochures</h5>
													<p>Download</p>
												</div>
											</div>
											<Link href="/service-details" className="download-btn">
												<i className="fa-light fa-download" />
											</Link>
										</div>
										<div className="brochures-download-items">
											<div className="brochures-items">
												<div className="icon">
													<i className="fal fa-file-pdf" />
												</div>
												<div className="content">
													<h5>Company Details</h5>
													<p>Download</p>
												</div>
											</div>
											<Link href="/service-details"
												className="download-btn active"
											>
												<i className="fa-light fa-download" />
											</Link>
										</div>
									</div>
									<div className="service-sidebar-widget">
										<div
											className="contact-bg text-center bg-cover"
											style={{
												backgroundImage:
													'url("assets/img/service/contact-bg.jpg")',
											}}
										>
											<p>Do You Need Help? We're Here to Support You</p>
											{/* <img src="/assets/img/service/logo.png" alt="img" /> */}
											<Link href="/contact" className="theme-btn w-100">
												Contact us now
												<i className="fa-regular fa-arrow-right" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
