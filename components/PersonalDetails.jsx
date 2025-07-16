import "./PersonalDetails.css"

export const PersonalDetails = () => (
  <section className="PersonalDetailsSection" >
    <h2 className='PersonalDetailsTitle'>Personal Details</h2>
      <div className="detailsGrid">

        <div className="DetailsGridItem" >
        <p >Address:</p>
        <div className="DetailsGridValue" > 28th St, Dammam KSA</div>
        </div>

        <div className="DetailsGridItem">
          <p >Date of Birth:</p>
          <div className="DetailsGridValue"> Jan 26, 1996</div>
        </div>

        <div className="DetailsGridItem">
        <p >Gender:</p>
        <div className="DetailsGridValue" > Male</div>
        </div>

      </div>
  </section>
);
