import { useContext, useEffect, useState } from "react";
import './NewRequest.css';
import './UploadDocumentPopup.css';
import { AuthContext } from '/src/AuthContext';
import TextareaAutosize from 'react-textarea-autosize';



const NewRequest = ({currentDepartment, currentUsers, setNewRequest}) => {




  const {departments, setDepartments} = useContext(AuthContext)

  const [errorMessage, setErrorMessage] = useState(null)
  const [isLeaveRequest, setIsLeaveRequest] = useState(false)

  const [formData, setFormData] = useState({
    employeeName: currentUsers[0].name,
    department: currentDepartment,
    requestId: Math.floor(10000 + Math.random() * 90000),
    requestType: "leave",
    date: new Date().toISOString().split('T')[0],
    startDate: new  Date().toISOString().split('T')[0],
    endDate: new  Date().toISOString().split('T')[0],
    reason: "",
    status: "Pending",
  });

  useEffect(() => { 
    if(errorMessage !== null && errorMessage !== undefined) {
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  },[errorMessage])

  useEffect(() => { 
    if(formData.requestType === "leave") {
        setIsLeaveRequest(true)
    } else if (formData.requestType !== "leave") {
        setIsLeaveRequest(false)
    }
  },[formData])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      const updatedUsers = currentUsers.map((user) => {
        if (user.name === formData.employeeName && formData.requestType === "leave" ) {
          return { ...user,
            requests: [...user.requests, {
              requestId: formData.requestId,
              requestType: formData.requestType,
              reason: formData.reason,
              status: formData.status,
              date: formData.date,
              startDate: formData.startDate,
              endDate: formData.endDate,
            }]
          }
        } else if (user.name === formData.employeeName && formData.requestType !== "leave" ) {
          return { ...user,
            requests: [...user.requests, {
              requestId: formData.requestId,
              requestType: formData.requestType,
              reason: formData.reason,
              status: formData.status,
              date: formData.date,
              startDate: "N/A",
              endDate: "N/A",
            }]
          }
        }
        else {return user}
      })
      
      
      setDepartments ((departments) => {
        return {
          ...departments, [currentDepartment]: updatedUsers
        }
      })
    
      

        setNewRequest(false)
  };



  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) { setNewRequest(false) } }} className="popup-overlay">
      
      <form className="uploadDocumentPopupForm m" onSubmit={handleSubmit}>
        <div className="formTitle">New Request</div>

          <label htmlFor="employee" className='inputLabel' >Employee Name:</label>
          <select required id="employee" name="employeeName" 
                  onChange={handleChange} 
                  className="formInputField list" 
                  value = {formData.employeeName}
                  >
            { currentUsers.map((user) => (
              <option value={user.name} key={user.name} >{user.name}</option>
          ))}
          </select>

        <label className='inputLabel' htmlFor="fileType">Request Type:</label>
        <select required id="requestType" name="requestType"
                onChange={handleChange} 
                className="formInputField list" 
                value = {formData.requestType} >           
          <option value="leave" key="leave" >leave</option>
          <option value="resignation" key="resignation" >resignation</option>
          <option value="equipment" key="equipment" >equipment</option>
          <option value="training" key="training" >training</option>
          <option value="other" key="other" >other</option>

        </select>

        <input
          type="text"
          className="formInputField"
          name="department"
          placeholder="Department"
          readOnly
          value={currentDepartment}
          onChange={handleChange}
        />

{/* ---------------------Dates------------ */}
{isLeaveRequest &&
        <div className="dateWrapper">
          <label htmlFor="DOB">Start Date:</label>
          <input required   
          id="startDate" 
          type="date" 
          className="dateInputField"
          value={formData.startDate}
          name="startDate" 
          placeholder="startDate" 
          onChange={handleChange} />

          <label htmlFor="DOB">End Date:</label>
          <input required   
          id="endDate" 
          type="date" 
          value={formData.endDate}
          className="dateInputField"
          name="endDate" 
          placeholder="endDate" 
          onChange={handleChange} />
          </div>
        }
{/* --------------------------------------- */}

        <div  className="dateWrapper">
        <label>Reason</label>
        <TextareaAutosize 
        required
        minRows={2}
        maxRows={10}
        minLength={30}
        maxLength={500}
        value={formData.reason} 
        onChange={handleChange}
        className="formInputField"
        style={{width: "92%", padding:"0.7vw", margin:"0"}}
          name="reason"
          placeholder="Document Title"
        />
        </div>


        { errorMessage &&
        <div className='selectedFile' >
          {errorMessage}
        </div>
        }

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default NewRequest;