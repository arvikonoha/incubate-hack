import React, { useState } from "react";

function SortNFilter({ domains, location }) {
  let [query, setQuery] = useState({ domains: [], location: "" });

  function toggleDomain(event, domain) {
    if (!event.target.checked)
      setQuery((query) => ({ ...query, domains: [...query.domains, domain] }));
    else
      setQuery((query) => ({
        ...query,
        domains: query.domains.filter((item) => item !== domain),
      }));
  }

  function toggleLocation(event) {
    if (!event.target.checked) setQuery((query) => ({ ...query, location }));
    else
      setQuery((query) => ({
        ...query,
        location: "",
      }));
  }

  return (
    <form
      className="p-4 rouded show"
      id="sort-and-filter"
      style={{ backgroundColor: "#e3e2e2", color: "#444" }}
    >
      <h1>Reccomendations</h1>
      <p style={{ fontSize: ".8rem", color: "#555" }}>
        Set your preferences for potential matches
      </p>
      <div className="form-group">
        <h1 style={{ fontSize: "1.6rem" }}>Domain of interest</h1>
        {domains.map((item) => {
          const printable =
            item.domain + (item.expertice ? `| ${item.expertice}` : "");
          return (
            <div key={printable} className="form-check form-check-inline">
              <i
                style={{
                  color: query.domains.includes(item.domain)
                    ? "#c4c4c4"
                    : "#28a745",
                }}
                className={"fas fa-check-circle"}
              ></i>
              <input
                onChange={(event) =>
                  toggleDomain.call(null, event, item.domain)
                }
                style={{
                  opacity: "0",
                  transform: "translate(-100%,0)",
                  cursor: "pointer",
                }}
                class="form-check-input"
                type="checkbox"
                id={printable}
              />
              <label
                style={{
                  transform: "translate(-12px,0)",
                  color: query.domains.includes(item.domain)
                    ? "#C4C4C4"
                    : "#444",
                }}
                class="form-check-label"
                htmlFor={printable}
              >
                {printable}
              </label>
            </div>
          );
        })}
      </div>
      <div className="form-group">
        <h1 style={{ fontSize: "1.6rem" }}>Location</h1>
        <div className="form-check form-check-inline">
          <i
            style={{
              color: query.location !== "" ? "#c4c4c4" : "#28a745",
            }}
            className={"fas fa-check-circle"}
          ></i>
          <input
            onChange={(event) => toggleLocation.call(null, event, location)}
            style={{
              opacity: "0",
              transform: "translate(-100%,0)",
              cursor: "pointer",
            }}
            class="form-check-input"
            type="checkbox"
            id={location}
          />
          <label
            style={{
              transform: "translate(-12px,0)",
              color: query.location !== "" ? "#C4C4C4" : "#444",
            }}
            class="form-check-label"
            htmlFor={location}
          >
            {location}
          </label>
        </div>
      </div>
    </form>
  );
}

export default SortNFilter;
