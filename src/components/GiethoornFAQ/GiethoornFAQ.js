import React from "react";
import "./GiethoornFAQ.css";

// Website Home Page FAQ component with a img
const GiethoornFAQ = () => {
  return (
    <div className="container text-start" style={{ marginTop: "125px" }}>
      <h2 className="text-center mb-5 add-font-family">
        FAQs about Hotels in Giethoorn!
      </h2>
      <div className="row d-flex align-items-center">
        <div className="col-12 col-sm-12 col-md-6">
          <img
            className="container-fluid image-custom"
            style={{ height: "510px" }}
            src="https://i.ibb.co/HKyGtwD/kisspng-travel-drawing-tourism-illustration-city-tour-5aa6e0261c3675-9692355215208857981156-removebg.png"
            alt=""
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 add-font-family">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How much does it cost to stay in a hotel in Giethoorn?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    On average, 3-star hotels in Giethoorn cost BDT 10,111 per
                    night, and 4-star hotels in Giethoorn are BDT 13,992 per
                    night.
                  </strong>{" "}
                  If you're looking for something really special, a 5-star hotel
                  in Giethoorn can be found for BDT 0 per night, on average
                  (based on Booking.com prices).
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Which hotels in Giethoorn are good for families?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Many families visiting Giethoorn loved staying at Hotel B&B
                  d'Olde Smidse, De Dames Van De Jonge Hotel Restaurant, and
                  Hotel de Harmonie.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Which hotels in Giethoorn are good for couples?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  These hotels in Giethoorn are highly rated by couples: Hotel
                  B&B d'Olde Smidse, De Dames Van De Jonge Hotel Restaurant, and
                  Hotel de Harmonie.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Which hotels in Giethoorn offer an especially good breakfast?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  For hotels in Giethoorn that serve highly-rated breakfasts,
                  try Hotel B&B d'Olde Smidse, De Dames Van De Jonge Hotel
                  Restaurant, and Hotel de Pergola.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Which hotels are the best ones to stay at in Giethoorn?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Hotel de Pergola, Hotel B&B d'Olde Smidse, and De Dames Van De
                  Jonge Hotel Restaurant are some of the popular hotels in
                  Giethoorn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiethoornFAQ;
