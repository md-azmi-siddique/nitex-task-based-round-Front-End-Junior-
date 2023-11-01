import React from "react";
import eventImg from "../Assets/images/Event/1.png";

import "./Events.css";
const Events = () => {
  return (
    <div className="container">
      <h1>Events</h1>
      <br></br>
      <div className="row">
        <div className="col">
          <div class="d-flex event-fruits">
            <div class="flex-shrink-0">
              {/* <img className="event-img" src={} alt="..." /> */}
            </div>
            <div class="flex-grow-1 ms-3">
              1. Organized the organic food events.
            </div>
          </div>
          <div class="d-flex event-fruits">
            <div class="flex-shrink-0">
              {/* <img className="event-img" src={} alt="..." /> */}
            </div>
            <div class="flex-grow-1 ms-3">
              2. Free seed distribution among the partnered farmers.
            </div>
          </div>
          <div class="d-flex event-fruits">
            <div class="flex-shrink-0">
              {/* <img className="event-img" src={} alt="..." /> */}
            </div>
            <div class="flex-grow-1 ms-3">
              3. Customer feedback taking through online.
            </div>
          </div>
        </div>
        <div className="col">
          <img className="image-event" src={eventImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Events;
