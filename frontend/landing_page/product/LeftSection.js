import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="mt-5 fs-4">{productDescription}</p>
          <div className="mt-5">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", fontSize: "22px" }}
            >
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{
                marginLeft: "50px",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-5 mb-5">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="googlePlay" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="appstore"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
