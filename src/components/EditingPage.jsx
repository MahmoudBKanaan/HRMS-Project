import { AuthContext } from "/src/AuthContext";
import { useContext, useEffect, useState } from "react";
import "./AddUser.css"
import { useNavigate } from "react-router-dom";




const EditingPage = () => {
    
    const {departments, setDepartments, currentDepartment,userIndex , setEditingPage} = useContext(AuthContext);
    if(userIndex === null || userIndex === undefined) {return}
    const [selectedImage, setSelectedImage] = useState(null)
    const [tempIndex, setTempIndex] = useState(userIndex)
    const user = departments[currentDepartment][tempIndex];
    const navigate = useNavigate();

    const [formData, setFormData] = useState(() => {
        return {
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            id: user.id || "",
            profileImage: user.profileImage || "",
            middleName: user.middleName || "",
            email: user.email || "",
            phone: user.phone || "",
            address: user.address || "",
            dateOfBirth: user.dateOfBirth || "",
            gender: user.gender || "",
            department: user.department || "",
            role: user.role || "",
            accountType: user.accountType || "",
            name: user.name || "",
            status: user.status || "",
            hireDate: user.hireDate || "",
            employmentStatus: user.employmentStatus || "",
            attendance: user.attendance || "",
            documents: user.documents || "",
            documentsDetails: user.documentsDetails || "",
            requests: user.requests || "",
            payroll: {
                baseSalary: user.payroll.baseSalary || 0,
                housingBenefits: user.payroll.housingBenefits || 0,
                transportationBenefits: user.payroll.transportationBenefits || 0,
                foodBenefits: user.payroll.foodBenefits || 0,
                commissions: user.payroll.commissions || 0,
                deductions: user.payroll.deductions || 0,
                netPay: user.payroll.netPay || 0,
                paymentStatus: user.payroll.paymentStatus || 0,
                paymentDate: user.payroll.paymentDate || 0,
            } || {},
    
            };
});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        middleName: formData.middleName,
        id: formData.id,
        profileImage: formData.profileImage,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        department: formData.department,
        role: formData.role,
        accountType: formData.accountType,
        name: formData.name,
        status: formData.status,
        hireDate: formData.hireDate,
        employmentStatus: formData.employmentStatus,
        attendance: formData.attendance,
        documents: formData.documents,
        documentsDetails: formData.documentsDetails,
        requests: formData.requests ,
        payroll: {
            baseSalary: formData.payroll.baseSalary,
            housingBenefits: formData.payroll.housingBenefits,
            transportationBenefits: formData.payroll.transportationBenefits,
            foodBenefits: formData.payroll.foodBenefits,
            commissions: formData.payroll.commissions,
            deductions: formData.payroll.deductions,
            netPay: formData.payroll.netPay,
            paymentStatus: formData.payroll.paymentStatus,
            paymentDate: formData.payroll.paymentDate,
        },
        };
    
  
    setDepartments((departments) => {
        const updatedDept = [...departments[currentDepartment]]
        updatedDept[tempIndex] =  newUser
        return {
        ...departments, [currentDepartment]: updatedDept
        };


  });
  
    setEditingPage(false)

}


const handleChange = (e) => {

    const {name , value } = e.target;

    if (["baseSalary","housingBenefits","transportationBenefits","foodBenefits","commissions","deductions"].includes(name)) {
        setFormData((prev) => ({
            ...prev, payroll: {
                ...prev.payroll, 
                [name]: value
            }
        }))
    } else {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    
    
};


const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      
      reader.onloadend = () => {
        try {
          const file = reader.result;
          localStorage.setItem(`${user.id}UserImage`, file)
          setSelectedImage(file);
          setFormData((prev) => ({
            ...prev, profileImage: file
          }))
          
        } catch (err) {
          consloe.err(err)
          navigate("/dashboard");
        }
        
      }
      reader.onerror = (error) => {
        console.err(error)
        navigate("/dashboard");
      }
      
      reader.readAsDataURL(file)
    }


};
 
  const cancelForm = () => {
      setEditingPage(false)
  }

  useEffect ( () => {
    const imageFile  = localStorage.getItem(`${user.id}UserImage`)
    if (imageFile) {
      setSelectedImage(imageFile);
      setFormData((prev) => ({
          ...prev, profileImage: imageFile
        }))
    } else {
      setSelectedImage(user.profileImage)
    }
  }, [])


return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="section">
        < div className="he">Personal Information</div>
        <div className="input-group">
          <input required className="inputField" name="firstName"  value={formData.firstName}
          placeholder="First Name" onChange={handleChange} />
          <input required className="inputField" name="lastName"  value={formData.lastName}
          placeholder="Last Name" onChange={handleChange} />
          <input required className="inputField" name="middleName" value={formData.middleName}
          placeholder="Middle Name" onChange={handleChange} />
          <input required className="inputField" name="address"  value={formData.address}
          placeholder="Address" onChange={handleChange} />
          <input required className="inputField" name="phone"  value={formData.phone}
          placeholder="Phone Number" onChange={handleChange} />
          <input required className="inputField" name="email" value={formData.email}
          placeholder="Email" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        < div className="he">Role Information</div>
        <div className="input-group">
          <input required   className="inputField"name="role"  value={formData.role}
          placeholder="Employee Role" onChange={handleChange} />
          <input required   className="inputField" name="id"  value={formData.id}
          maxLength="5" pattern="\d{5}" 
          onInput={(e) => e.target.setCustomValidity("")}
          onInvalid={(e) => e.target.setCustomValidity("Please enter exactly 5 digits")}
           placeholder="Employee ID *" onChange={handleChange} />
        </div>
      </div>

      <div className="section">
        < div className="he">Payroll Information</div>
        <div className="input-group">
          <input required   className="inputField"name="baseSalary" value={formData.payroll.baseSalary}
          placeholder="Base Salary" onChange={handleChange} />
          <input required   className="inputField" name="housingBenefits"  value={formData.payroll.housingBenefits}
          placeholder="Housing Benefits" onChange={handleChange} />
          <input required   className="inputField"name="transportationBenefits"  value={formData.payroll.transportationBenefits}
          placeholder="Transportations benefits" onChange={handleChange} />
          <input required   className="inputField"name="foodBenefits"       value={formData.payroll.foodBenefits}
          placeholder="Food Benefits" onChange={handleChange} />
          <input required   className="inputField"name="commissions"   value={formData.payroll.commissions}
          placeholder="Overtime Com. (per hour)" onChange={handleChange} />
          <input required   className="inputField"name="deductions"  value={formData.payroll.deductions}
          placeholder="Leave Deductions (per hour)" onChange={handleChange} />
        </div>
      </div>

      <div className="selectionSection">

        <div className="sub-section">
          <label htmlFor="DOB">Date of Birth:</label>
          <input required   id="DOB" type="date" className="inputField" value={formData.dateOfBirth}
          name="dateOfBirth" placeholder="Date Of Birth" onChange={handleChange} />
        </div>

        <div className="sub-section">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender"  onChange={handleChange} value={formData.gender}> 
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="Other" >Other</option>
          </select>
        </div>

        <div className="sub-section">
          <label htmlFor="department">Department:</label>
          <select required id="department" name="department" onChange={handleChange} value={currentDepartment} >
            { Object.entries(departments).map(([dept, users]) => (
              
              <option  key={dept} >{dept}</option>
          ))}
          </select>
        </div>

        <div className="ImageWrapper">
        <div className="imageButton">
        <label required htmlFor="profileImage">Upload Profile Image 📁</label>
        <input className="imageInputField" type="file" id="profileImage" name="profileImage"
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
        <button type="submit" className="create-btn">Update</button>
      </div>
    </form>
  );
};

export default EditingPage;