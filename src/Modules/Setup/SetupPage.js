import FormContent from "../UI/FormContent";
import FormText from "../UI/FormText";

const SetupPage = (props) => {
  function onSubmit() {
    props.updateCounter();
  }
  return (
    <div>
      <FormText
        heading="Lets set up a home for all your work"
        subHeading="You can always create another workspace later."
      />
      <FormContent
        firstField="Workspace Name"
        secondField="Workspace Url"
        urlInput={true}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SetupPage;
