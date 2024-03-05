import React, { useState } from "react";
import "./Tracks.css";
import Plant from "./Clip path group.png";
import useHover from "./../../hooks/useHover";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Tracks() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleHover = (cardNumber) => {
    setHoveredCard(cardNumber);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };
  const renderCardContent = (cardNumber, content) => {
    return (
      <div
        className="w-35 h-50 text-white text-xs text-center"
        style={{ marginTop: "25px" }}
      >
        <h1 className="font-bold text-l mb-2">{content.title}</h1>
        <p className="mb-4">{content.description}</p>
      </div>
    );
  };

  const [hoverRef1, isHovered1] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  const [hoverRef4, isHovered4] = useHover();
  const [hoverRef5, isHovered5] = useHover();
  const [hoverRef6, isHovered6] = useHover();

  const card1Content = {
    title: "HEALTH CARE",
    description:
      "Elevate healthcare through digital solutions – from telemedicine to mental health support. Join us in shaping a healthier future.",
  };

  const card2Content = {
    title: "FOOD AND AGRICULTURE",
    description:
      "Join to innovate in food and agriculture—solve challenges in farming, supply chains, and sustainability for a resilient future.",
  };

  const card3Content = {
    title: "SAFETY AND SECURITY",
    description:
      "Dive into solutions for energy and sustainability challenges. Join us in creating a greener future.",
  };

  const card4Content = {
    title: "SPONSORS",
    description:
      "Solve real-world challenges presented by our sponsors. Join for a dynamic event, turning ideas into impactful solutions..",
  };

  const card5Content = {
    title: "SMART CITIES",
    description:
      "Redefine urban living with innovative solutions. Join us in creating intelligent, connected, and sustainable cities.",
  };

  const card6Content = {
    title: "E-COMMERCE",
    description:
      "Redefine online shopping experiences and logistics in this innovation challenge. Join to shape the future of digital retail      ",
  };

  return (
    <>
      <h1 className="text-white text-7xl mb-auto Fheading">Domains/Tracks</h1>
      <div className="containers">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div
                className="w-40 h-40 rounded-5 bg-gray-700 border-5 border-yellow-600"
                ref={hoverRef1}
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(1)}
              >
                {isHovered1 ? (
                  renderCardContent(1, card1Content)
                ) : (
                  <img src={Plant} alt="plant" />
                )}
              </div>
            </div>
            <div className="col">
              <div
                className="w-40 h-40 rounded-5 bg-gray-700 border-5 border-yellow-600"
                ref={hoverRef2}
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(2)}
              >
                {isHovered2 ? (
                  renderCardContent(2, card2Content)
                ) : (
                  <img src={Plant} alt="plant" />
                )}
              </div>
            </div>
            <div className="col">
              <div
                className="w-40 h-40 rounded-5 bg-gray-700 border-5 border-yellow-600"
                ref={hoverRef3}
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(3)}
              >
                {isHovered3 ? (
                  renderCardContent(3, card3Content)
                ) : (
                  <img src={Plant} alt="plant" />
                )}
              </div>
            </div>
            <div className="col">
              <div
                className="w-40 h-40 rounded-5 bg-gray-700 border-5 border-yellow-600"
                ref={hoverRef4}
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(4)}
              >
                {isHovered4 ? (
                  renderCardContent(4, card4Content)
                ) : (
                  <img src={Plant} alt="plant" />
                )}
              </div>
            </div>
            <div className="col">
              <div
                className="w-40 h-40 rounded-5 bg-gray-700 border-5 border-yellow-600"
                ref={hoverRef5}
                onMouseEnter={() => handleHover(5)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(5)}
              >
                {isHovered5 ? (
                  renderCardContent(5, card5Content)
                ) : (
                  <img src={Plant} alt="plant" />
                )}
              </div>
            </div>
            <div className="col">
              <div
                className="w-40 h-40 rounded-5 bg-gray-700 border-5 border-yellow-600"
                ref={hoverRef6}
                onMouseEnter={() => handleHover(6)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(6)}
              >
                {isHovered6 ? (
                  renderCardContent(6, card6Content)
                ) : (
                  <img src={Plant} alt="plant" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        show={selectedCard !== null}
        onHide={handleCloseModal}
        backdrop="static"
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title style={{ backgroundColor: "black", color: "white" }}>
            {selectedCard ? eval(`card${selectedCard}Content`).title : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formRegNo">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter registration number"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Tracks;
