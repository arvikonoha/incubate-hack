import React, { useState, useCallback } from "react";
import DomainModal from "../Utils/DomainModal/DomainModal";
import ProjectModal from "../Utils/ProjectModal/ProjectModal";

function CreateProfile() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [location, setLocation] = useState("");
  let [email, setEmail] = useState("");
  let [github, setGithub] = useState("");
  let [linkedin, setLinkedin] = useState("");
  let [title, setTitle] = useState("Student");
  let [description, setDescription] = useState("");

  let [domainList, setDomains] = useState([]);

  function addDomain(domain) {
    setDomains((domainList) => [...domainList, domain]);
  }

  const deleteDomain = useCallback((item) => {
    setDomains((domainList) =>
      domainList.filter((inner) => item.domain !== inner.domain)
    );
  }, []);

  let [projectList, setProject] = useState([]);

  function addProject(project) {
    setProject((projectList) => [...projectList, project]);
  }

  const deleteProject = useCallback((item) => {
    setProject((projectList) =>
      projectList.filter((inner) => item.project !== inner.project)
    );
  }, []);

  function uploadProfile(event) {
    event.preventDefault();

    console.log({
      fname,
      lname,
      linkedin,
      github,
      email,
      location,
      title,
      domains: domainList,
      projects: projectList,
    });
  }

  return (
    <section
      className="mx-auto p-3"
      style={{ maxWidth: "540px" }}
      id="create-profile"
    >
      <h1 className="text-center  mb-2" style={{ fontSize: "1.8rem" }}>
        Code mapper
      </h1>
      <p style={{ color: "#444" }} className="text-center  mb-5">
        You are yet to create a profile. To start using our application make a
        profile by entering the below details
      </p>
      <hr />
      <form
        onSubmit={uploadProfile}
        className="p-5 my-3 "
        style={{ color: "#444", backgroundColor: "#E3E2E2" }}
      >
        <h2>Create profile</h2>
        <p style={{ fontSize: ".8rem" }}>
          We will only show the relevant details. Private information will be
          shared only on matching
        </p>
        <hr />
        <div className="form-row">
          <div className="form-group col-md-6">
            <label style={{ fontWeight: "bolder" }} htmlFor="fname">
              First name
            </label>
            <input
              placeholder="Enter your first name"
              className="form-control"
              type="text"
              id="fname"
              name="fname"
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label style={{ fontWeight: "bolder" }} htmlFor="lname">
              Last name
            </label>
            <input
              placeholder="Enter your first name"
              className="form-control"
              type="text"
              id="lname"
              name="lname"
              value={lname}
              onChange={(event) => setLname(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bolder" }} htmlFor="description">
            Description
          </label>
          <textarea
            placeholder="Tell about yourself"
            className="form-control"
            name="description"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bolder" }} htmlFor="location">
            Location
          </label>
          <input
            placeholder="Enter your location"
            className="form-control"
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            name="location"
          />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bolder" }} htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter your email id"
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label style={{ fontWeight: "bolder" }} htmlFor="title">
            Job title
          </label>
          <select
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
            name="title"
            id="title"
            required
          >
            <option value="Student">Student</option>
            <option value="Lecturer">Lecturer</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div className="form-group">
          <p style={{ fontWeight: "bolder" }}>
            Enter your domains of interest and your level of expertice in it{" "}
          </p>
          {domainList.map((item) => (
            <div key={item} className="badge badge-secondary p-1 m-1">
              {item.domain} {item.expertice ? `| ${item.expertice}` : ""}{" "}
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
                onClick={deleteDomain.bind(null, item)}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            </div>
          ))}
          <br />
          <button
            type="button"
            data-toggle="modal"
            data-target="#domain-modal"
            className="btn btn-primary"
          >
            Add domain <i className="fas fa-plus-circle"></i>
          </button>
          <DomainModal addDomain={addDomain} />
        </div>
        <div className="form-group">
          <label style={{ fontWeight: "bolder" }} htmlFor="github">
            GitHub
          </label>
          <input
            placeholder="Enter your GitHub link"
            className="form-control"
            type="text"
            name="github"
            id="github"
            value={github}
            onChange={(event) => setGithub(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label style={{ fontWeight: "bolder" }} htmlFor="linkedin">
            Linkedin
          </label>
          <input
            placeholder="Enter your Linkedin link"
            className="form-control"
            type="url"
            name="linkedin"
            value={linkedin}
            onChange={(event) => setLinkedin(event.target.value)}
            id="linkedin"
            required
          />
        </div>
        <div className="form-group">
          <p style={{ fontWeight: "bolder" }}>
            Enter your projects completed with its link
          </p>
          {projectList.map((item) => (
            <div key={item} className="badge badge-secondary p-1 m-1">
              {item.project}
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
                onClick={deleteProject.bind(null, item)}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            </div>
          ))}
          <br />
          <button
            type="button"
            data-toggle="modal"
            data-target="#project-modal"
            className="btn btn-primary"
          >
            Add project <i className="fas fa-plus-circle"></i>
          </button>
          <ProjectModal addProject={addProject} />
        </div>
        <input
          className="btn btn-block btn-primary"
          style={{ fontWeight: "bolder" }}
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
}
export default CreateProfile;
