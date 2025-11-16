"use client";

export default function CtaBanner() {
  return (
    <>
      <section className="cta-banner-section bg-white! section-padding">
        <div className="container">
          <div
            className="cta-banner-wrapper fix bg-cover"
            style={{ backgroundImage: 'url("assets/img/cta-bg.jpg")' }}
          >
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Looking For The Perfect <span>Transport Partner</span>? <br />
              <span className="text-theme">Explore Our Profile</span>
            </h2>
            <div
              className="theme-btn bg-white wow fadeInUp cursor-pointer"
              data-wow-delay=".6s"
              onClick={() => {
                window?.open?.("/assets/pdf/profile.pdf", "_blank");
              }}
            >
              View Profile
              <i className="fa-regular fa-arrow-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
