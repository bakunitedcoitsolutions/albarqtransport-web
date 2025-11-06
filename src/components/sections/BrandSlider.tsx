"use client";

import type React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	spaceBetween: 30,
	speed: 2500,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		1199: {
			slidesPerView: 5,
		},
		991: {
			slidesPerView: 4,
		},
		767: {
			slidesPerView: 3,
		},
		575: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
		},
	},
};

export default function BrandSlider(): React.ReactElement {
	return (
		<div className="brand-section fix section-padding pt-0">
			<div className="container">
				<div className="swiper brand-slider">
					<Swiper {...swiperOptions} className="swiper-wrapper">
						<SwiperSlide className="swiper-slide">
							<div className="brand-image center">
								<img src="/assets/img/brand/brand-logo.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="brand-image center">
								<img src="/assets/img/brand/brand-logo-2.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="brand-image center">
								<img src="/assets/img/brand/brand-logo-3.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="brand-image center">
								<img src="/assets/img/brand/brand-logo-4.png" alt="img" />
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="brand-image center">
								<img src="/assets/img/brand/brand-logo-5.png" alt="img" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

