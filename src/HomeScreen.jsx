import "./HomeScreen.scss";
import Editor from "./components/Editor";
import { useState } from "react";

function HomeScreen() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    profile: "",
    address: "",
    number: "",
    email: "",
  });

  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  return (
    <div className="homeScreen">
      <div className="editor_container">
        <Editor
          formData={formData}
          setFormData={setFormData}
          education={education}
          setEducation={setEducation}
          work={work}
          setWork={setWork}
        />
      </div>
      <div className="cv_container">
        <div className="left">
          <div className="details">
            <h3>Details</h3>
            <hr></hr>
            <h4>Address</h4>
            <p>{formData.address}</p>
            <h4>Phone</h4>
            <p>{formData.number}</p>
            <h4>Email</h4>
            <p>{formData.email}</p>
          </div>
        </div>
        <div className="right">
          <div className="profile">
            <h3>Profile</h3>
            <hr></hr>
            <p>{formData.profile}</p>
          </div>
          <div className="work">
            <h3>Experience</h3>
            <hr></hr>
            {work.map((work, index) => {
              return (
                <div className="work_div" key={index}>
                  <p className="work_title">
                    {work.position}, {work.company}
                  </p>
                  <p className="work_date">
                    {work.startDate} to {work.endDate}
                  </p>
                  <p>{work.duties}</p>
                </div>
              );
            })}
          </div>
          <div className="education_div">
            <h3>Education</h3>
            <hr></hr>
            {education.map((edu, index) => {
              return (
                <div key={index}>
                  <p className="education_title">
                    {edu.title}, {edu.school}
                  </p>
                  <p>{edu.date}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="header">
          <h1>{formData.name}</h1>
          <h2>{formData.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
