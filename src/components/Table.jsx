import { useState, useEffect, useContext } from "react";
import { AuthContext } from "/src/AuthContext.jsx";
import "./DepartmentTable.css"







const Table = ({ tableTitle, buttonTitle, buttonFunction ,headerList, rowList, optionsList , optionsListFunctions }) => {

    
    const [menuIndex, setMenuIndex] = useState(null);
    const {userIndex, setUserIndex} = useContext(AuthContext);

  useEffect(() => {
    if(menuIndex !== null) {
        const menuIndexReset = setTimeout(() => {
        setMenuIndex(null);
        }, 5000);
        return () => clearTimeout(menuIndexReset);
         }
    },[menuIndex])


    

    const DropdownMenu = ({ visible}) => {
        if(optionsList.length === optionsListFunctions.length) {
        return (
            <div className={`actionDropdown ${visible ? "show" : ""}`}>
            {optionsList.map((option, idx) => (
            <div key={idx} onClick={() =>  optionsListFunctions[idx]()} >{option}</div>
        ))}
        </div>
        );
    } else {
        return;
    }
    };

  


    return (

      
    <div className="department">
    {buttonTitle && 
    <button onClick={buttonFunction} className="add-user">{buttonTitle}</button>
    }
      <h2>{tableTitle}</h2>
      <table>
        <thead>
          <tr>
            {headerList.map((headerListItem, idx) => (
                <th key={idx} >{headerListItem}</th>   
                    )
                )
            }
          </tr>
        </thead>
        <tbody>
            {rowList.map((row, rowIndex) => (
            <tr key={rowIndex} >
                {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="tableCell">
                    {cell}
                </td>
                ))}

              <td>
                <div className="action-container">
                  <div onClick={() => {
                    setMenuIndex(rowIndex);
                    setUserIndex(rowIndex);
                    }}>
                    <div className="menu-icon">☰</div>
                    {menuIndex === rowIndex && userIndex === menuIndex &&  <DropdownMenu visible={true}   />}
                  </div>
                </div>
              </td>

            </tr>
            ))}
            

        </tbody>
      </table>
    </div>

  );
};  

export default Table;