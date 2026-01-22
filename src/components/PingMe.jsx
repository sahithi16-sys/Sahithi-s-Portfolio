import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ThemeContext } from '../contexts/ThemeContext';

function PingMe() {
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
      <div className="card glass-card p-5 d-flex flex-column align-items-center justify-content-center text-center homepage-card" role="button" onClick={()=>handleShow()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more-icon lucide-message-circle-more"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
        <h3>Ping Me</h3>
      </div>
<Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  dialogClassName="w-100 custom-modal pingme-modal"
  style={{ maxWidth: "98vw", height: "90vh" }}
>
  <Modal.Header
    className="custom-modal-header py-2 d-flex justify-content-between align-items-center"
  >
    <Modal.Title className="fw-bold">Ping Me</Modal.Title>

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
    <div className="container py-3 d-flex flex-column gap-3">

      <div
        className="p-3 rounded contact-card"
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open("mailto:vsahithi1604@gmail.com", "_blank")
        }
      >
        <h5 className="fw-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDark ? "#60a5fa" : "#1e40af"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px", display: "inline" }}
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          E-mail
        </h5>
        <h6 className="fw-semibold">
          vsahithi1604@gmail.com
        </h6>
      </div>

      {/* Linkedin Card */}
      <div
        className="p-3 rounded contact-card"
        style={{ cursor: "pointer" }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/sahithi-veeramosu-215aa135b/",
            "_blank"
          )
        }
      >
        <h5 className="fw-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDark ? "#60a5fa" : "#1e40af"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "8px", display: "inline" }}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          Linkedin
        </h5>
        <h6 className="fw-semibold">
          Sahithi Veeramosu
        </h6>
      </div>

    </div>
  </Modal.Body>
</Modal>


    </>
  )
}

export default PingMe