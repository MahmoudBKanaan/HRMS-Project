import "./ProfileSection.css"

export const ProfileSection = () => {


    return (
          <div className="profileSection">
            <img src="src/assets/profileImage.png" alt="Neo Arel" className="profileImg" />
              <div className="profileInfo">
                <div className='ProfileUpperSection' > 
                  <div className='NameRoleWrapper' >
                  <h2 className='EmployeeName' >Neo Arel</h2>
                  <p className='EmployeeRole'>Software Engineer</p>
                  </div>
                  <div className='ButtonsWrapper' >
                  <button className="checkInBtn">Check-In</button>
                  <button className="checkOutBtn">Check-Out</button>
                  </div>
                </div>
                <div className='ProfileLowerSection'  >
                  
                    <div className='LowerSectionColumn' >
                    <div className='LowerSectionTitle'>Email:
                    <div className='LowerSectionText'> Neo7368@gmail.com</div>
                    </div>
                    <div className='LowerSectionTitle'>Hire Date:
                    <div className='LowerSectionText'> March 22, 2025</div>
                    </div>
                    </div>

                    <div className='LowerSectionColumn'>
                    <div className='LowerSectionTitle'>Phone:
                    <div className='LowerSectionText'> 057 63 66 939</div>
                    </div>
                    <div className='LowerSectionTitle'> Employee ID:
                    <div className='LowerSectionText'>224867</div>
                    </div>
                    </div>

                </div>
              </div>
          </div>
    );
};