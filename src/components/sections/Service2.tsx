"use client";

// import "swiper/css";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: ".h1n",
		prevEl: ".h1p",
	},

	// Pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
}

export default function Service2() {
	return (
		<>
			<section className="service-section fix section-padding section-bg" id="services">
				<div className="bg-shape">
					<img src="/assets/img/service/bg-shape.png" alt="img" />
				</div>
				<div className="container">
					<div className="section-title text-center">
						<h6 className="wow fadeInUp">
							<i className="fa-regular fa-arrow-left-long" />
							quality Services
							<i className="fa-regular fa-arrow-right-long" />
						</h6>
						<h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
							Best Of our High Quality <br /> constriction
						</h2>
					</div>
				</div>
				<div className="container-fluid">
					<div className="swiper service-slider-2">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="/assets/img/service/05.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="/assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-sharp fa-solid fa-plane-arrival" />
									</div>
									<div className="content">
										<h3>
											<Link href="/service-details">ocean Freight</Link>
										</h3>
										<p>
											It is a long established fact xbliuthat a reader will be
											distracteda the readable content of a page when looking
										</p>
										<Link href="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="/assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="/assets/img/service/05.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="/assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-solid fa-plane" />
									</div>
									<div className="content">
										<h3>
											<Link href="/service-details">Air Freight</Link>
										</h3>
										<p>
											It is a long established fact xbliuthat a reader will be
											distracteda the readable content of a page when looking
										</p>
										<Link href="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="/assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="/assets/img/service/05.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="/assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fas fa-landmark" />
									</div>
									<div className="content">
										<h3>
											<Link href="/service-details">Land Freight</Link>
										</h3>
										<p>
											It is a long established fact xbliuthat a reader will be
											distracteda the readable content of a page when looking
										</p>
										<Link href="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="/assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="service-card-items">
									<div className="service-image">
										<img src="/assets/img/service/05.jpg" alt="img" />
									</div>
									<div className="bar-shape">
										<img src="/assets/img/service/bar.png" alt="img" />
									</div>
									<div className="icon">
										<i className="fa-sharp fa-solid fa-train" />
									</div>
									<div className="content">
										<h3>
											<Link href="/service-details">Railway Freight</Link>
										</h3>
										<p>
											It is a long established fact xbliuthat a reader will be
											distracteda the readable content of a page when looking
										</p>
										<Link href="/service-details" className="link-btn">
											Explore More <i className="fa-solid fa-arrow-right" />
										</Link>
									</div>
									<div className="items-shape">
										<img src="/assets/img/service/items-shape.png" alt="img" />
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
						<div className="swiper-dot mt-5">
							<div className="dot" />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="service-pagi-items">
						<div className="service-dot" />
						<div className="array-buttons">
							<button className="array-prev h1p">
								<i className="fa-solid fa-arrow-left-long" />
							</button>
							<button className="array-next h1n">
								<i className="fa-solid fa-arrow-right-long" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
