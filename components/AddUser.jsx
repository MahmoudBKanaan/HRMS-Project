import "./AddUser.css"









  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };



const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};



const AddUser = () => {
       const [formData, setFormData] = useState({});


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="section">
        <h3>Personal Information</h3>
        <div className="input-group">
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input name="middleName" placeholder="Middle Name" onChange={handleChange} />
          <input name="idNumber" placeholder="ID Number" onChange={handleChange} />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <input name="dob" placeholder="Date Of Birth" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        <h3>Role Information</h3>
        <div className="input-group">
          <input name="role" placeholder="Employee Role" onChange={handleChange} />
          <input name="employeeId" placeholder="Employee ID *" onChange={handleChange} />
          <input name="department" placeholder="Department" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        <h3>Payroll Information</h3>
        <div className="input-group">
          <input name="baseSalary" placeholder="Base Salary" onChange={handleChange} />
          <input name="housing" placeholder="Housing Benefits" onChange={handleChange} />
          <input name="transport" placeholder="Transportations benefits" onChange={handleChange} />
          <input name="food" placeholder="Food Benefits" onChange={handleChange} />
          <input name="overtime" placeholder="Overtime Com. (per hour)" onChange={handleChange} />
          <input name="deductions" placeholder="Leave Deductions (per hour)" onChange={handleChange} />
        </div>
      </div>

      <div className="button-group">
        <button type="button" className="cancel-btn">Cancel</button>
        <button type="submit" className="create-btn">Create</button>
      </div>
    </form>
  );
};

export default AddUser;