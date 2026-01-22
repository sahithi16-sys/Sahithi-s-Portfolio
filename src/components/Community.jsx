import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { ThemeContext } from '../contexts/ThemeContext';

function Community({community}) {
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-users"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
        <h3>Community</h3>
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
    <Modal.Title className="fw-bold">Community</Modal.Title>

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
  <div className="container py-3">
    <div className="row row-cols-md-3 row-cols-sm-2 g-3">

      {community.map((i) => (
        <div className="col" style={{width: "30vw"}} key={i.name}>
          <div
            className="h-100 p-3 rounded community-card"
            style={{
              backgroundColor: isDark ? "var(--color-secondary)" : "var(--color-secondary)",
              color: isDark ? "var(--color-textPrimary)" : "var(--color-textPrimary)",
              border: `2px solid var(--color-primary)`
            }}
          >
            <div className="text-center">
              <img
                src={i.logo}
                alt="Logo Not Found"
                className="mb-2"
                style={{
                  maxHeight: "80px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div className="card-body p-2">
              <h5
                className="fw-bold"
                style={{ color: "var(--color-accent)" }}
              >
                {i.name}
              </h5>

              <h6 className="mb-2 fw-semibold">
                {i.role}
              </h6>

              <p className="small">
                {i.description}
              </p>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</Modal.Body>


        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Community;
