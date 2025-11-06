import Counter1 from "./Counter1"

export default function Achivements() {
	return (
		<>
			<section
				className="achivements-section fix section-bg-2 section-padding bg-cover"
				style={{
					backgroundImage: 'url("assets/img/achivements-bg-shape.png")',
				}}
			>
				<div className="container">
					<div className="achivements-wrapper">
						<div className="row g-4 justify-content-between">
							<div className="col-xxl-6 col-xl-7 col-lg-8">
								<div className="achivements-content">
									<div className="section-title">
										<h6 className="wow fadeInUp">
											<i className="fa-regular fa-arrow-left-long" />
											ACHIVEMENTS
											<i className="fa-regular fa-arrow-right-long" />
										</h6>
										<h2 className="wow fadeInUp" data-wow-delay=".2s">
											Let's Get Started We are <br /> now Transport a dream.
										</h2>
									</div>
									<p className="mt-3 mt-md-0 wow fadeInUp">
										It is a long established fact that a reader will be
										distracted the readable content of a page when looking at
										layout the point of using lorem the is Ipsum less Trastek
										normal distribution of letters.
									</p>
									<Counter1 />
								</div>
							</div>
							<div
								className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="achivements-image">
									<img src="/assets/img/achivements-image.jpg" alt="img" />
									<div className="achivements-image-2 float-bob-y">
										<img src="/assets/img/achivements-image-2.jpg" alt="img" />
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
