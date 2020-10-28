import React, { useState } from "react";

function ProjectModal({ addProject }) {
  let [projectDetails, setProject] = useState({});
  let [errorMessage, setError] = useState("");
  let [successMessage, setSuccess] = useState("");

  function submitProject() {
    if (!(projectDetails.project && projectDetails.link)) {
      setError("Please enter the project title & the link");
      setTimeout(() => setError(""), 2000);
    } else {
      addProject(projectDetails);
      setProject({});
      setSuccess("Project successfully added");
      setTimeout(() => setSuccess(""), 2000);
    }
  }

  function changeProject(event) {
    setProject((item) => ({ ...item, project: event.target.value }));
  }

  function changeLink(event) {
    setProject((item) => ({ ...item, link: event.target.value }));
  }

  return (
    <div
      className="modal fade"
      id="project-modal"
      tabIndex="-1"
      aria-labelledby="domain-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal label">
              Enter the project details
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label
                style={{ fontWeight: "bolder" }}
                htmlFor="project-name"
                className="col-form-label"
              >
                Enter the project name
              </label>
              <input
                onChange={changeProject}
                value={projectDetails.project}
                className="form-control"
                type="text"
                name="domain"
                id="domain-alter"
              />
            </div>
            <div className="form-group">
              <label
                style={{ fontWeight: "bolder" }}
                htmlFor="link-name"
                className="col-form-label"
              >
                Enter the project link
              </label>
              <input
                onChange={changeLink}
                value={projectDetails.link}
                className="form-control"
                type="text"
                name="domain"
                id="domain-alter"
              />
            </div>
          </div>

          {errorMessage ? (
            <p className="alert alert-danger mx-3">{errorMessage}</p>
          ) : (
            ""
          )}
          {successMessage ? (
            <p className="alert alert-success mx-3">{successMessage}</p>
          ) : (
            ""
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={submitProject}
              type="button"
              className="btn btn-primary"
            >
              Add project
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
