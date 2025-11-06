import React from "react";
import CounterNumber from "../elements/CounterNumber";

export default function Counter1() {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="/assets/img/icon/11.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={45} />
              </span>
              k+
            </h2>
            <p>project Complete</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="/assets/img/icon/12.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={25} />
              </span>
              k+
            </h2>
            <p>Active On Clients</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="/assets/img/icon/13.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={2} />
              </span>
              +
            </h2>
            <p>Experience Team</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="/assets/img/icon/14.svg" alt="img" />
            </div>
            <h2>
              <span className="count">
                <CounterNumber count={2.4} />
              </span>
              k+
            </h2>
            <p>Winning Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
