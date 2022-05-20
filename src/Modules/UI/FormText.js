import './FormText.css';
const FormText = (props) => {
    return (
      <div>
        <div className='heading'>{props.heading}</div>
        <div className='sub-heading'>{props.subHeading}</div>
      </div>
    );
  };
  
  export default FormText;
  