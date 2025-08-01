import './Popup.css';

const Popup = ({title , message , confirmationFunction, cancellationFunction}) => {
  

  return (
    <div className="popup-overlay2"  onClick={(e) => { if (e.target === e.currentTarget) { cancellationFunction() } }}>
      <div className="question-popup-container">
        <div className='question-popup-title'>{title}</div>
        <p>{message}</p>
        <div className="question-popup-buttons">
          <button className="btn-no" onClick={() => cancellationFunction()}>No</button>
          <button className="btn-yes" onClick={() => confirmationFunction()} >Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
