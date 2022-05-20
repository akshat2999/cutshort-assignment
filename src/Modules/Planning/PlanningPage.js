import FormText from "../UI/FormText";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import InputCard from "../UI/InputCard";
import "./PlanningPage.css"
import SubmitButton from "../UI/SubmitButton";
const PlanningPage = (props) => {
  function onSubmit() {
    props.updateCounter();
  }
  return (
    <div>
      <FormText
        heading="How are you planning to use Eden?"
        subHeading="We'll streamline your experience accordingly."
      />
      
      <div
        className="input-field"
      >
        <InputCard
          icon={<PersonIcon />}
          title="For myself"
          subTitle="Write better. Think more clearly. Stay organized."
        />
        <InputCard
          icon={<GroupIcon />}
          title="For team"
          subTitle="Wikis, docs, tasks & projects, all in one place."
        />
      </div>
        <SubmitButton onClick = {onSubmit}/>
    </div>
  );
};

export default PlanningPage;
