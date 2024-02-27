import "./General.scss";
function General({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <div className="general_container">
      <form>
        <div className="personal">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g Software Developer"
          />
        </div>

        <textarea
          type="text"
          id="profile"
          onChange={handleInputChange}
          value={formData.profile}
        />
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="City"
        />
        <input
          type="number"
          id="number"
          value={formData.number}
          onChange={handleInputChange}
          placeholder="Mobile Number"
        />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email address"
        />
      </form>
    </div>
  );
}

export default General;
