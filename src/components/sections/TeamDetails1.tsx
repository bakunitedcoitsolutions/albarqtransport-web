import React from "react"
import Link from "next/link"

export default function TeamDetails1() {
	return (
		<>
			<section className="team-details-section fix section-padding">
				<div className="container">
					<div className="team-details-wrapper">
						<div className="team-details-items">
							<div className="details-image">
								<img src="/assets/img/team/details-1.jpg" alt="img" />
							</div>
							<div className="team-details-content">
								<div className="details-header">
									<h3>Jenny Wilson</h3>
									<span>Sr. engineer</span>
								</div>
								<p className="cont">
									Prior to joining company, she spent 20+ years at Inmosys,
									where he held a wide range of global leadership roles, from
									services to products, and across operations and sales. Most
									recently, he was SVP &amp; Global Head of the Manufacturing
									business..
								</p>
								<h6 className="team-details-info">
									<span className="text-title">Phone Number:</span>
									<span className="text-data">
										<Link href="/tel:+915690036420">+91 5698 0036 420</Link>
									</span>
								</h6>
								<h6 className="team-details-info">
									<span className="text-title">Email:</span>
									<span className="text-data">
										<Link href="/mailto:example@gmail.com">
											example@gmail.com
										</Link>
									</span>
								</h6>
								<h6 className="team-details-info">
									<span className="text-title">Website:</span>
									<span className="text-data">
										<Link href="/team-details">http://example.com/example</Link>
									</span>
								</h6>
								<h6 className="team-details-info">
									<span className="text-title">Experience:</span>
									<span className="text-data">15 Years</span>
								</h6>
								<h6 className="team-details-info">
									<span className="text-title">Availability:</span>
									<span className="text-data">Full Time Employee</span>
								</h6>
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
						<div className="personal-skills-items">
							<div className="row g-5">
								<div className="col-lg-5">
									<h3 className="mb-3">About Me</h3>
									<p>
										There are many variations of passages of x ohyt Lorem Ipsum
										available, but the majority havehbith suffered x alteration
										in some form, by injected humour, or randomised wo zyx words
										which don't look even slightly believable. If you are going
										to use a passage of Lorem Ipsum,
									</p>
									<p className="mt-4">
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour,
									</p>
								</div>
								<div className="col-lg-7">
									<h3 className="mb-3">Personal skills</h3>
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable. If you are going to use a
										passage
									</p>
									<div className="skill-feature-items">
										<div className="skill-feature">
											<h3 className="box-title">Architecture</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "85%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: "1",
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">85</span>%
													</div>
												</div>
											</div>
										</div>
										<div className="skill-feature">
											<h3 className="box-title">Construction</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "85%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: "1",
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">90</span>%
													</div>
												</div>
											</div>
										</div>
										<div className="skill-feature">
											<h3 className="box-title">Interior Design</h3>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: "85%",
														animation:
															"2.6s ease 0s 1 normal none running animate-positive",
														opacity: "1",
													}}
												>
													<div className="progress-value">
														<span className="counter-number2">75</span>%
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="team-gallery-items">
							<h3 className="mb-md-3">My Work Gallery</h3>
							<div className="row">
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="gallery-thumb">
										<img src="/assets/img/team/gallery-1.jpg" alt="img" />
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="gallery-thumb">
										<img src="/assets/img/team/gallery-2.jpg" alt="img" />
									</div>
								</div>
								<div className="col-xl-4 col-lg-6 col-md-6">
									<div className="gallery-thumb">
										<img src="/assets/img/team/gallery-3.jpg" alt="img" />
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
