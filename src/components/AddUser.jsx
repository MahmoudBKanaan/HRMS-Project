import { AuthContext } from "../AuthContext";
import "./AddUser.css"
import { useContext, useState } from "react";

const AddUser = () => {
  
const [selectedImage, setSelectedImage] = useState(null);
const [formData, setFormData] = useState({});
const {setAddUser} = useContext(AuthContext);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

const handleChange = (e) => {
  console.log(formData)
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const cancelForm = () => {
      setAddUser(false)
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="section">
        < div className="he">Personal Information</div>
        <div className="input-group">
          <input className="inputField"name="firstName" placeholder="First Name" onChange={handleChange} />
          <input className="inputField"name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input className="inputField"name="middleName" placeholder="Middle Name" onChange={handleChange} />
          <input className="inputField"name="idNumber" placeholder="ID Number" onChange={handleChange} />
          <input className="inputField"name="address" placeholder="Address" onChange={handleChange} />
          <input className="inputField"name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input className="inputField"name="email" placeholder="Email" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        < div className="he">Role Information</div>
        <div className="input-group">
          <input className="inputField"name="role" placeholder="Employee Role" onChange={handleChange} />
          <input className="inputField"name="employeeId" placeholder="Employee ID *" onChange={handleChange} />
          <input className="inputField"name="department" placeholder="Department" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        < div className="he">Payroll Information</div>
        <div className="input-group">
          <input className="inputField"name="baseSalary" placeholder="Base Salary" onChange={handleChange} />
          <input className="inputField"name="housing" placeholder="Housing Benefits" onChange={handleChange} />
          <input className="inputField"name="transport" placeholder="Transportations benefits" onChange={handleChange} />
          <input className="inputField"name="food" placeholder="Food Benefits" onChange={handleChange} />
          <input className="inputField"name="overtime" placeholder="Overtime Com. (per hour)" onChange={handleChange} />
          <input className="inputField"name="deductions" placeholder="Leave Deductions (per hour)" onChange={handleChange} />
        </div>
      </div>
      <div className="section">
        <div className="sub-section">
          <label htmlFor="DOB">Date of Birth:</label>
          <input id="DOB" type="date" className="inputField" name="dob" placeholder="Date Of Birth" onChange={handleChange} />
        </div>
        <div className="sub-section">
          <label htmlFor="gender">Date of Birth:</label>
          <input id="gender" type="date" className="inputField" name="dob" placeholder="Date Of Birth" onChange={handleChange} />
        </div>
      </div>
      <div className="ImageWrapper">
      <div className="imageButton">
      <label htmlFor="profileImage">Upload Profile Image 📁</label>
      <input className="imageInputField" type="file" id="profileImage" accept="image/*" onChange={(e) => handleImageChange(e)} />
      </div>
      {selectedImage && (
        <div className="imagePerview" >
          <p>Preview:</p>
          <img src={selectedImage} alt="Preview" width="140" height="140" />
        </div>
      )}
      </div>

      <div className="button-group">
        <button type="button" className="cancel-btn" onClick={() => cancelForm()} >Cancel</button>
        <button type="submit" className="create-btn">Create</button>
      </div>
    </form>
  );
};

export default AddUser;