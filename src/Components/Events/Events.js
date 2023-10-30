import React, { useState, useEffect } from "react";

import "./Events.css";
const Events = () => {
  const [event, setEvent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container event-container">
      <div className={`event-title ${event ? "event" : ""}`}>
        <h1>events</h1>
        <br></br>
        <h3>Fruits</h3>
        <div class="d-flex event-fruits">
          <div class="flex-shrink-0">
            {/* <img className="event-img" src={} alt="..." /> */}
          </div>
          <div class="flex-grow-1 ms-3">
            Apples are round or oval fruits, often red or green, with a crisp
            texture and sweet to tart flavor. They are a good source of fiber
            and various nutrients.
          </div>
        </div>
        <div class="d-flex event-fruits">
          <div class="flex-shrink-0">
            {/* <img className="event-img" src={} alt="..." /> */}
          </div>
          <div class="flex-grow-1 ms-3">
            Mango is a tropical fruit prized for its juicy, sweet, and fragrant
            flesh. It has a distinctive oval shape and often has a yellow-orange
            skin. Rich in vitamins and antioxidants.
          </div>
        </div>
        <div class="d-flex event-fruits">
          <div class="flex-shrink-0">
            {/* <img className="event-img" src={} alt="..." /> */}
          </div>
          <div class="flex-grow-1 ms-3">
            Banana is a popular tropical fruit, known for its yellow color,
            creamy texture, and sweet flavor, rich in potassium and dietary
            fiber.
          </div>
        </div>
        <div class="d-flex event-fruits">
          <div class="flex-shrink-0">
            {/* <img className="event-img" src={} alt="..." /> */}
          </div>
          <div class="flex-grow-1 ms-3">
            An orange is a citrus fruit, known for its round shape, vibrant
            orange color, and sweet-tangy flavor, abundant in vitamin C.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
