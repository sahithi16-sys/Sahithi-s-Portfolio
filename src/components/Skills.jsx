import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Skills({ skills }) {
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState(null);

  const handleShow = () => {
    console.log(skills);
    console.log("show state(handleShow)", show);
    setShow(true);
  };
  const handleClose = () => {
    console.log("show state(handleClose)", show);
    setShow(false);
    setSkill(null);
  };

let content;

switch (skill) {
  case null:
    content = (
      <p className="text-center mx-auto" style={{ color: "var(--dark-main)" }}>
        Select a skill category
      </p>
    );
    break;

  case "pl":
    content = (
      <div className="row row-cols-3 text-center">
        {skills.pl.map((i) => (
          <div className="col p-3" key={i.name}>
            <i className={`${i.className} fs-1`} style={{ color: "var(--accent-teal)" }}></i>
            <p className="mt-2 fw-semibold">{i.name}</p>
          </div>
        ))}
      </div>
    );
    break;

  case "fw":
    content = (
      <div className="row row-cols-3 text-center">
        {skills.fw.map((i) => (
          <div className="col p-3" key={i.name}>
            <i className={`${i.className} fs-1`} style={{ color: "var(--accent-teal)" }}></i>
            <p className="mt-2 fw-semibold">{i.name}</p>
          </div>
        ))}
      </div>
    );
    break;

  case "db":
    content = (
      <div className="row row-cols-3 text-center">
        {skills.db.map((i) => (
          <div className="col p-3" key={i.name}>
            <i className={`${i.className} fs-1`} style={{ color: "var(--accent-teal)" }}></i>
            <p className="mt-2 fw-semibold">{i.name}</p>
          </div>
        ))}
      </div>
    );
    break;

  case "cp":
    content = (
      <div className="p-3">
        {skills.cp.map((i) => (
          <div className="mb-3 skill-card p-3 rounded" key={i.platform}>
            <i className={`${i.className} fs-1`} style={{ color: "var(--highlight)" }}></i>

            <p className="mt-2"><b>Platform:</b> {i.platform}</p>

            {i.level && <p><b>Level:</b> {i.level}</p>}

            <p><b>Rating:</b> {i.rating}</p>
          </div>
        ))}
      </div>
    );
    break;

  case "dt":
    content = (
      <div className="row row-cols-3 text-center">
        {skills.dt.map((i) => (
          <div className="col p-3" key={i.name}>
            <i className={`${i.className} fs-1`} style={{ color: "var(--accent-teal)" }}></i>
            <p className="mt-2 fw-semibold">{i.name}</p>
          </div>
        ))}
      </div>
    );
    break;

  default:
    content = null;
}

  return (
    <>
      <div
        className="card glass-card p-5 d-flex flex-column align-items-center justify-content-center text-center homepage-card"
        role="button"
        onClick={() => handleShow()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLineCap="round"
          strokeLineJoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-code-circle-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5" />
          <path d="M15.5 10.5l1.5 1.5l-1.5 1.5" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M13 9.5l-2 5.5" />
        </svg>
        <h3>Skills</h3>
      </div>
<Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  dialogClassName="w-100"
  style={{ maxWidth: "90vw",height: "80vh" }}
>

  <Modal.Header
    className="py-2 d-flex justify-content-between align-items-center"
    style={{
      backgroundColor: "var(--primary-mint)",
      color: "var(--dark-main)"
    }}
  >
    <Modal.Title className="fw-bold">Skills</Modal.Title>

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

<Modal.Body
  style={{
    backgroundColor: "var(--bg-light)",
    color: "var(--dark-main)",
    padding: "0",
    maxHeight: "58vh",
    minHeight: "35vh"
  }}
>
  <div className="container">
    <div className="row">

      {/* Left Sidebar */}
      <div
        className="col-5 p-0"
        style={{
          backgroundColor: "var(--primary-mint)",
          minHeight: "35vh"
        }}
      >
        {[
          ["pl", "Programming Languages"],
          ["fw", "Frameworks"],
          ["db", "Databases"],
          ["cp", "Competitive Programming"],
          ["dt", "Developer Tools"]
        ].map(([key, label]) => (
          <button
            key={key}
            className="btn w-100 text-start rounded-0"
            style={{
              backgroundColor:
                skill === key
                  ? "var(--accent-teal)"
                  : "transparent",

              color:
                skill === key
                  ? "white"
                  : "var(--dark-main)",

              fontWeight: skill === key ? "bold" : "normal"
            }}
            onClick={() => setSkill(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="col-7 p-3">
        {content}
      </div>

    </div>
  </div>
</Modal.Body>
</Modal>
    </>
  );
}

export default Skills;
