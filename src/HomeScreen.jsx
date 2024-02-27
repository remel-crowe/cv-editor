import "./HomeScreen.scss";
import Editor from "./components/Editor";
import { useState } from "react";

function HomeScreen() {
  const [formData, setFormData] = useState({
    name: "",
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
        <h1>{formData.name}</h1>
        <h1>{formData.address}</h1>
        <h1>{formData.number}</h1>
        <h1>{formData.email}</h1>

        {education.map((edu, index) => {
          return (
            <div key={index}>
              <h1>{edu.school}</h1>
              <h1>{edu.date}</h1>
              <h1>{edu.title}</h1>
            </div>
          );
        })}

        {work.map((work, index) => {
          return (
            <div key={index}>
              <h1>{work.company}</h1>
              <h1>{work.position}</h1>
              <h1>
                {work.startDate}
                {work.endDate}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
