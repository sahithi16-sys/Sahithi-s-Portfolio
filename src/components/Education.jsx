import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Education({ education }) {
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
          className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
        <h3>Education</h3>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="w-100"
        style={{ maxWidth: "90vw", height: "80vh" }}
      >
        <Modal.Header
          className="py-2 d-flex justify-content-between align-items-center"
          style={{
            backgroundColor: "var(--primary-mint)",
            color: "var(--dark-main)"
          }}
        >
          <Modal.Title className="fw-bold">Education</Modal.Title>

          <div className="toolbar-btns d-flex gap-2">
            <div
              className="rounded-circle toolbar-btn"
              style={{
                backgroundColor: "#ff5f57",
                width: "14px",
                height: "14px"
              }}
              onClick={handleClose}
            ></div>
            <div
              className="rounded-circle toolbar-btn"
              style={{
                backgroundColor: "#ffbd2e",
                width: "14px",
                height: "14px"
              }}
            ></div>
            <div
              className="rounded-circle toolbar-btn"
              style={{
                backgroundColor: "#28c840",
                width: "14px",
                height: "14px"
              }}
            ></div>
          </div>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "var(--bg-light)",
            color: "var(--dark-main)",
            padding: 0,
            maxHeight: "58vh",
            minHeight: "35vh",
            overflow: "auto"
          }}
        >
          <div className="container py-3">
            {education.map((i, index) => (
              <div className="row align-items-start align-items-stretch" key={index}>
                {/* Left Content */}
                <div className={`col-5 ${index % 2 === 0 ? "text-end" : ""}`}>
                  {index % 2 === 0 && (
                    <div className="education-card p-3 rounded">
                      <h5
                        className="fw-bold"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        {i.degree} - {i.field}
                      </h5>
                      <div>{i.institute}</div>
                      <div className="small">{i.grade}</div>
                      <div className="small">{i.duration}</div>
                    </div>
                  )}
                </div>

                {/* Center Timeline */}
                <div className="col-2 d-flex flex-column align-items-center timeline-container">
                  {index !== 0 && <div className="timeline-line"></div>}

                  <div
                    className="rounded-circle p-2 my-2 timeline-icon"
                    style={{
                      border: "2px solid var(--accent-teal)",
                      backgroundColor: "var(--primary-mint)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent-teal)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>

                  {index !== education.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                {/* Right Content */}
                <div className={`col-5 ${index % 2 !== 0 ? "text-start" : ""}`}>
                  {index % 2 !== 0 && (
                    <div className="education-card p-3 rounded">
                      <h5
                        className="fw-bold"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        {i.degree} - {i.field}
                      </h5>
                      <div>{i.institute}</div>
                      <div className="small">{i.grade}</div>
                      <div className="small">{i.duration}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Education;
