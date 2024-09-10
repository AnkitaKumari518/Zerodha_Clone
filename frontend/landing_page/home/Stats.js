import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="mb-5">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with{" "}
            <i class="fa fa-inr" aria-hidden="true"></i>3.5+ lakh crores worth
            of equity investments.
          </p>

          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamifictaion", or annoying push notifictaions.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-4">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="fs-4">Do better with money</h3>
          <p className="text-muted">
            with initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively hepl you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecoSystem"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
