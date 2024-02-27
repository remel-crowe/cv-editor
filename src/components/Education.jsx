import { useState } from "react";

function Education({ education, setEducation }) {
  const [newEdu, setNewEdu] = useState({
    school: "",
    date: "",
    title: "",
  });

  const handleSubmit = () => {
    setEducation([...education, newEdu]);
    setNewEdu({
      // Reset form fields after submission
      school: "",
      date: "",
      title: "",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewEdu((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="School"
          id="school"
          value={newEdu.school}
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="date"
          id="date"
          value={newEdu.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Course Name"
          id="title"
          value={newEdu.title}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Add Education+
        </button>
      </form>
    </div>
  );
}

export default Education;
