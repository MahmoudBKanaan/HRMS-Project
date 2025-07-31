import { useContext, useEffect, useState } from "react";
import { AuthContext } from '/src/AuthContext';
import './UploadDocumentPopup.css';



const UploadDocumentPopup = ({setUploadDocumentPopup , dept, users}) => {




  const {departments, setDepartments} = useContext(AuthContext)

  const [errorMessage, setErrorMessage] = useState(null)
  const [formData, setFormData] = useState({
    employeeName: users[0].name,
    department: dept,
    documentTitle: '',
    fileType: 'PDF',
    file: null,
  });

  useEffect(() => { 
    if(errorMessage !== null && errorMessage !== undefined) {
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  },[errorMessage])


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.file === null) {setErrorMessage("Please select file")} 
    else {

      const updatedUsers = users.map((user) => {
        if (user.name === formData.employeeName) {
          return { ...user,
            documents: [...user.documents, formData.documentTitle],
            documentsDetails: [...user.documentsDetails, {
              title: formData.documentTitle,
              type: formData.fileType,
              size: `${(Math.trunc(Number(formData.file.size)/1024))} KB`,
              uploadedAt: (formData.file.lastModifiedDate).toISOString().split("T")[0],
            }]
          }
        } else {return user}
      })
      
      
      setDepartments ((departments) => {
        return {
          ...departments, [dept]: updatedUsers
        }
      })
    }
      


    setUploadDocumentPopup(false)
  };



  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) { setUploadDocumentPopup(false) } }} className="popup-overlay">
      
      <form className="uploadDocumentPopupForm m" onSubmit={handleSubmit}>
        <div className="formTitle">Upload Document</div>



          <label htmlFor="employee" className='inputLabel' >Employee:</label>
          <select required id="employee" name="employeeName" 
                  onChange={handleChange} 
                  className="formInputField list" 
                  value = {formData.employeeName}>
            { users.map((user) => (
              
              <option value={user.name} key={user.name} >{user.name}</option>
          ))}
          </select>


        <input
          type="text"
          className="formInputField"
          name="department"
          placeholder="Department"
          readOnly
          value={dept}
          onChange={handleChange}
        />

        <input
          type="text"
          required
          className="formInputField"
          name="documentTitle"
          placeholder="Document Title"
          value={formData.documentTitle}
          onChange={handleChange}
        />

        <label className='inputLabel' htmlFor="fileType">File Type:</label>
        <select required id="fileType" name="fileType"
                onChange={handleChange} 
                className="formInputField list" 
                value = {formData.fileType} >           
          <option value="PDF" key="PDF" >PDF</option>
          <option value="JPG" key="JPG" >JPG</option>
          <option value="PNG" key="PNG" >PNG</option>
        </select>

        <div className="fileButton">
          <label htmlFor='file'  
          className="profileImage">
            Upload File here 📁
            </label>
          <input
          className='fileInputField'

            type="file"
            name="file"
            id='file'
            onChange={handleChange}
          />
        </div>

        { formData.file &&
        <div className='selectedFile' >
          {formData.file.name}
        </div>
        }
        { errorMessage &&
        <div className='selectedFile' >
          {errorMessage}
        </div>
        }

        <button type="submit">Submit File</button>
      </form>
    </div>
  );
};

export default UploadDocumentPopup;