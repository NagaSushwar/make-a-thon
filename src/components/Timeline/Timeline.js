import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="Timelinecontainer">
      <div className="LeftHalf">
        <div className="TimelineHeading">TIMELINE</div>
      </div>
      <div className="RightHalf">
        <div className="timeline">
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date" style={{ color: "white" }}>
                4 March 2024
              </span>
              <h3 className="timeline-title" style={{ color: "gold" }}>
                Registartion Opens
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date" style={{ color: "white" }}>
                15 March 2024
              </span>
              <h3 className="timeline-title" style={{ color: "gold" }}>
                Pre-Makeathon(Round-0 starts)
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date" style={{ color: "#fff" }}>
                17 March 2024
              </span>
              <h3 className="timeline-title" style={{ color: "gold" }}>
                Registartion Closes
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date" style={{ color: "#fff" }}>
                18 March 2024
              </span>
              <h3 className="timeline-title" style={{ color: "gold" }}>
                Round 0 ends
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="dot"></div>
            <div className="pl-10">
              <span className="timeline-date" style={{ color: "#fff" }}>
                27 March 2024
              </span>
              <h3 className="timeline-title" style={{ color: "gold" }}>
                Makeathon Begins!!!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
