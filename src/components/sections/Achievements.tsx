import Counter1 from "./Counter1";

export default function Achievements() {
  return (
    <>
      <section
        className="achievements-section fix section-bg-2 section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/achievements-bg-shape.png")',
        }}
      >
        <div className="container">
          <div className="achievements-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <div className="achievements-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      ACHIEVEMENTS
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
                <div className="achievements-image">
                  <img src="/assets/img/achievements-image.jpg" alt="img" />
                  <div className="achievements-image-2 float-bob-y">
                    <img src="/assets/img/achievements-image-2.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
