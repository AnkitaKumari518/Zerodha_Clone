import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="support">
      <div className="p-5" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row " id="supportPortal">
      <div className="col-6 p-3 mb-5">
        <h1 className="fs-2 mb-5">Search for an answer or browse help topics to create a ticket</h1>
        <input placeholder="Eg: how do i activate F&O, why is my order getting rejected..."/><br/>
        <a href="#">Track account opening</a>
        <a href="#">Track segment activation</a>
        <a href="#">Intraday margins</a>
        <br/>
        <a href="#">Kite user manual</a>
      </div>
      <div className="col-6 p-5 mb-5" id="feature">
        <h1 className="fs-2">Featured</h1>
        <ol className="fs-4">
            <li className="mb-3"> <a href="#">Current Buybacks - August 2024</a></li>
            <li><a href="#">Offer for sale (OFS) - August 2024</a></li>
        </ol>
      </div>
      </div>
    </section>
     );
}

export default Hero;
