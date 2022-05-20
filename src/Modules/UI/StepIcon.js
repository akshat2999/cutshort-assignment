import "./StepIcon.css";
const StepIcon = (props) => {
  return <div className={"round-container"+ (props.active ? " inner-color": "")}>{props.number}</div>;
};
export default StepIcon;
