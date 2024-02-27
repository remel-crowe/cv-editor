import { useState } from "react";
import "./Work.scss";
function Work({ work, setWork }) {
  const [newWork, setNewWork] = useState({
    company: "",
    position: "",
    duties: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewWork((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWork([...work, newWork]);
    setNewWork({
      company: "",
      position: "",
      duties: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="work_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          id="company"
          value={newWork.company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Position"
          id="position"
          value={newWork.position}
          onChange={handleInputChange}
        />
        <textarea
          type="text"
          id="duties"
          onChange={handleInputChange}
          value={newWork.duties}
          placeholder="Summary"
        />
        <div className="date_container">
          <label className="date" htmlFor="startDate">
            Start Date:{" "}
          </label>
          <input
            type="date"
            id="startDate"
            value={newWork.startDate}
            onChange={handleInputChange}
          />
          <label className="date" htmlFor="endDate">
            End Date:{" "}
          </label>
          <input
            type="date"
            id="endDate"
            value={newWork.endDate}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Add Work+</button>
      </form>
    </div>
  );
}

export default Work;
