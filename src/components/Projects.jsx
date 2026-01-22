import { useState, useContext } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { ThemeContext } from '../contexts/ThemeContext';

function Projects({ projects }) {
  const { isDark } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    console.log("show state(handleShow)", show);
    setShow(true);
  };
  const handleClose = () => {
    console.log("show state(handleClose)", show);
    setShow(false);
  };

  return (
    <>
      <div
        className="card glass-card p-5 d-flex flex-column align-items-center justify-content-center text-center homepage-card"
        role="button"
        onClick={() => {
          handleShow();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-folder-code"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
          <path d="M20 21l2 -2l-2 -2" />
          <path d="M17 17l-2 2l2 2" />
        </svg>
        <h3>Projects</h3>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="w-100 custom-modal"
        style={{ maxWidth: "90vw", height: "80vh" }}
      >
        <Modal.Header
          className="custom-modal-header py-2 d-flex justify-content-between align-items-center"
          style={{
            backgroundColor: isDark ? "var(--color-primary)" : "var(--color-primary)",
            color: isDark ? "white" : "white"
          }}
        >
          <Modal.Title className="fw-bold">Projects</Modal.Title>
          <div className="toolbar-btns d-flex gap-2">
            <div
              className="rounded-circle toolbar-btn"
              style={{ backgroundColor: "#ff5f57", width: "14px", height: "14px" }}
              onClick={handleClose}
            ></div>
            <div
              className="rounded-circle toolbar-btn"
              style={{ backgroundColor: "#ffbd2e", width: "14px", height: "14px" }}
            ></div>
            <div
              className="rounded-circle toolbar-btn"
              style={{ backgroundColor: "#28c840", width: "14px", height: "14px" }}
            ></div>
          </div>
        </Modal.Header>

        <Modal.Body className="custom-modal-body">
          <Carousel controls={false} indicators interval={null}>
            {projects.map((i, index) => (
              <Carousel.Item key={index} className="h-100">
                {/* IMAGE SECTION */}
                <div className="d-flex justify-content-center bg-secondary py-3">
                  <Carousel
                    interval={5000}
                    indicators={false}
                    prevIcon={
                      <span
                        className="carousel-control-prev-icon"
                        style={{ filter: "brightness(0.2)" }}
                      />
                    }
                    nextIcon={
                      <span
                        className="carousel-control-next-icon"
                        style={{ filter: "brightness(0.2)" }}
                      />
                    }
                    className="w-100"
                  >
                    {i.images.map((image, ind) => (
                      <Carousel.Item key={ind}>
                        <img
                          src={image}
                          alt=""
                          className="d-block mx-auto img-fluid"
                          style={{
                            maxHeight: "300px",
                            objectFit: "contain",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="p-3">
                  <h5 className="fw-bold" style={{ color: "var(--color-textPrimary)" }}>{i.title}</h5>
                  <h6 style={{ color: "var(--color-textSecondary)" }}>{i.subtitle}</h6>

                  <div className="d-flex flex-wrap gap-2 my-2">
                    {i.techStack.map((b, ind) => (
                      <span key={ind} className="badge rounded-pill" style={{ backgroundColor: "var(--color-primary)" }}>
                        {b}
                      </span>
                    ))}
                  </div>

                  <ul className="small mb-3" style={{ color: "var(--color-textPrimary)" }}>
                    {i.description.map((l, item) => (
                      <li key={item}>{l}</li>
                    ))}
                  </ul>

                  <div className="d-flex gap-3">
                    <button
                      className="btn px-4 fw-semibold"
                      style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                      onClick={() => window.open(i.repo, "_blank")}
                    >
                      Code
                    </button>

                    <button className="btn px-4 fw-semibold" style={{ border: `2px solid var(--color-primary)`, color: "var(--color-primary)" }}>
                      Live Demo
                    </button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Projects;
