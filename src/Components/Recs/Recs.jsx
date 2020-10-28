import React, { useState } from "react";
import Candidates from "./Candidates/Candidates";
import SortNFilter from "./SortNFilter/SortNFilter";

function Recs() {
  let [filterOpen, setFilter] = useState(false);

  return (
    <section className="container p-3" id="recomendation">
      <SortNFilter
        domains={[{ domain: "Machine learning", expertice: "Beginner" }]}
        location={"Udupi"}
      />
      <button
        class="btn btn-secondary float-right"
        type="button"
        data-toggle="collapse"
        data-target="#sort-and-filter"
        aria-expanded="false"
        aria-controls="sort-and-filter"
        onClick={(event) => setFilter((filter) => !filter)}
      >
        {filterOpen ? "Filter options" : "Close"}
        {filterOpen ? (
          <i style={{ marginLeft: ".8rem" }} class="fas fa-filter"></i>
        ) : (
          <i style={{ marginLeft: ".8rem" }} class="fas fa-times-circle"></i>
        )}
      </button>
      <Candidates />
    </section>
  );
}

export default Recs;
