import { AuthContext } from "/src/AuthContext";
import "./AddUser.css"
import { useContext, useState } from "react";
import defaultImage from "/src/assets/logoWhite.png"

const AddUser = () => {
  
  const {setAddUser, departments, setDepartments, currentDepartment } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [formData, setFormData] = useState({
  gender: "other",
  department: currentDepartment,
});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: formData.employeeId,
      accountType: 'user',
      profileImage: selectedImage,
      name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`,
      status: 'active',
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      dateOfBirth: formData.dob,
      gender: formData.gender,
      hireDate: new Date().toISOString().split('T')[0],
      department: formData.department,
      role: formData.role,
      employmentStatus: 'Active',
      attendance: '100%',
      payroll: {
        baseSalary: Number(formData.baseSalary),
        housingBenefits: Number(formData.housing),
        transportationBenefits: Number(formData.transport),
        foodBenefits: Number(formData.food),
        commissions: Number(formData.overtime),
        deductions: Number(formData.deductions),
        netPay: Number(formData.baseSalary)+
        Number(formData.housing)+Number(formData.transport)+
        Number(formData.food)+Number(formData.overtime)-
        Number(formData.deductions),
        paymentStatus: 'Pending',
        paymentDate: null
      },
      documents: ["None"],
      documentsDetails: [],
      requests: [],
      payments: [],

    };
    
  
  setDepartments((departments) => {
    const dept = newUser.department
    const updatedDeptUsers = departments[dept]?
    [...departments[dept], newUser]:
    [newUser];
    return {
      ...departments, [dept]: updatedDeptUsers
    };


  });
  
  setAddUser(false)

}


const handleChange = (e) => {
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
          <input required className="inputField" name="firstName" 
          placeholder="First Name" onChange={handleChange} />
          <input required className="inputField" name="lastName" 
          placeholder="Last Name" onChange={handleChange} />
          <input required className="inputField" name="middleName" 
          placeholder="Middle Name" onChange={handleChange} />
          <input required className="inputField" name="address" 
          placeholder="Address" onChange={handleChange} />
          <input required className="inputField" name="phone" 
          placeholder="Phone Number" onChange={handleChange} />
          <input required className="inputField" name="email" 
          placeholder="Email" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        < div className="he">Role Information</div>
        <div className="input-group">
          <input required   className="inputField"name="role" 
          placeholder="Employee Role" onChange={handleChange} />
          <input required   className="inputField" name="employeeId" 
          maxLength="5" pattern="\d{5}" 
          onInput={(e) => e.target.setCustomValidity("")}
          onInvalid={(e) => e.target.setCustomValidity("Please enter exactly 5 digits")}
           placeholder="Employee ID *" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        < div className="he">Payroll Information</div>
        <div className="input-group">
          <input required   className="inputField"name="baseSalary"
          placeholder="Base Salary" onChange={handleChange} />
          <input required   className="inputField" name="housing" 
          placeholder="Housing Benefits" onChange={handleChange} />
          <input required   className="inputField"name="transport" 
          placeholder="Transportations benefits" onChange={handleChange} />
          <input required   className="inputField"name="food" 
          placeholder="Food Benefits" onChange={handleChange} />
          <input required   className="inputField"name="overtime" 
          placeholder="Overtime Com. (per hour)" onChange={handleChange} />
          <input required   className="inputField"name="deductions" 
          placeholder="Leave Deductions (per hour)" onChange={handleChange} />
        </div>
      </div>

      <div className="selectionSection">

        <div className="sub-section">
          <label htmlFor="DOB">Date of Birth:</label>
          <input required   id="DOB" type="date" className="inputField"
          name="dob" placeholder="Date Of Birth" onChange={handleChange} />
        </div>

        <div className="sub-section">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender"  onChange={handleChange}>
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="Other" >Other</option>
          </select>
        </div>

        <div className="sub-section">
          <label htmlFor="department">Department:</label>
          <select required id="department" name="department" onChange={handleChange} value = {formData.department}>
            { Object.entries(departments).map(([dept, users]) => (
              
              <option value={dept} key={dept} >{dept}</option>
          ))}
          </select>
        </div>

        <div className="ImageWrapper">
        <div className="imageButton">
        <label required htmlFor="profileImage">Upload Profile Image 📁</label>
        <input className="imageInputField" type="file" id="profileImage" 
        accept="image/*" onChange={(e) => handleImageChange(e)} />
        </div>
        {selectedImage && (
          <div className="imagePerview" >
            <p>Preview:</p>
            <img src={selectedImage} alt="Preview" width="130" height="130" />
          </div>
        )}
        </div>


      </div>



      <div className="button-group">
        <button type="button" className="cancel-btn" onClick={() => cancelForm()} >Cancel</button>
        <button type="submit" className="create-btn">Create</button>
      </div>
    </form>
  );
};

export default AddUser;