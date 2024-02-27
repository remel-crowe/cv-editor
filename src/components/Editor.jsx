import General from "./General";
import Education from "./Education";
import Work from "./Work";
import "./Editor.scss";

function Editor({
  formData,
  setFormData,
  education,
  setEducation,
  work,
  setWork,
}) {
  return (
    <div className="form_inputs">
      <div className="general">
        <h2>General Info</h2>
        <hr></hr>
        <General formData={formData} setFormData={setFormData} />
      </div>

      <div className="work">
        <h2>Employment</h2>
        <hr></hr>
        <Work work={work} setWork={setWork} />
      </div>
      <div className="education">
        <h2>Education</h2>
        <hr></hr>
        <Education education={education} setEducation={setEducation} />
      </div>
    </div>
  );
}

export default Editor;
