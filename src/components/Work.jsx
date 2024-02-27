import React, { useState } from "react";

function Work({ work, setWork }) {
  const [newWork, setNewWork] = useState({
    company: "",
    position: "",
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
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div>
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
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={newWork.startDate}
          onChange={handleInputChange}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={newWork.endDate}
          onChange={handleInputChange}
        />
        <button type="submit">Add Work</button>
      </form>
    </div>
  );
}

export default Work;
