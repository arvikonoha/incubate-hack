import React, { useState } from "react";

function DomainModal({ addDomain }) {
  let [domainDetails, setDomain] = useState({ domain: "Web development" });
  let [errorMessage, setError] = useState("");
  let [successMessage, setSuccess] = useState("");

  function selectDomain(event) {
    setDomain((item) => ({ ...item, domain: event.target.value }));
  }

  function selectExpertice(event) {
    setDomain((item) => ({ ...item, expertice: event.target.value }));
  }

  function submitDomain() {
    if (!domainDetails.domain) {
      setError("Please enter the domain");
      setTimeout(() => setError(""), 2000);
    } else {
      addDomain(domainDetails);
      setDomain({});
      setSuccess("Domain successfully added");
      setTimeout(() => setSuccess(""), 2000);
    }
  }

  function changeDomain(event) {
    setDomain((item) => ({ ...item, domain: event.target.value }));
  }

  return (
    <div
      className="modal fade"
      id="domain-modal"
      tabIndex="-1"
      aria-labelledby="domain-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal label">
              Choose a domain of interest
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
                htmlFor="domain"
                className="col-form-label"
              >
                Domain:
              </label>
              <select
                onChange={selectDomain}
                className="form-control"
                id="domain"
              >
                <option value="Web development">Web development</option>
                <option value="Machine learning">Machine learning</option>
                <option value="Mobile app dev">Mobile app dev</option>
                <option value="Dev ops">Dev ops</option>
                <option value="Data science">Data science</option>
              </select>
            </div>
            <div className="form-group">
              <label
                style={{ fontWeight: "bolder" }}
                htmlFor="domain-alter"
                className="col-form-label"
              >
                Dont see your domain? Enter the domain name in the field below
              </label>
              <input
                onChange={changeDomain}
                value={domainDetails.domain}
                className="form-control"
                type="text"
                name="domain"
                id="domain-alter"
              />
            </div>
            <div className="form-group">
              <label
                style={{ fontWeight: "bolder" }}
                htmlFor="expertice"
                className="col-form-label"
              >
                Level of expertice
              </label>
              <select
                onChange={selectExpertice}
                className="form-control"
                id="expertice"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          {errorMessage ? (
            <p className="alert alert-danger mx-3">{errorMessage}</p>
          ) : (
            ""
          )}

          <p>
            {successMessage ? (
              <p className="alert alert-success mx-3">{successMessage}</p>
            ) : (
              ""
            )}
          </p>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={submitDomain}
              type="button"
              className="btn btn-primary"
            >
              Add domain
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainModal;
