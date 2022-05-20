import "./SubmitButton.css";
const SubmitButton = (props) => {
  return (
    <div className="outer-box">
      <input
        type="submit"
        value={props.value ? props.value : "Create WorkSpace"}
        onClick={props.onClick}
      />
    </div>
  );
};
export default SubmitButton;
