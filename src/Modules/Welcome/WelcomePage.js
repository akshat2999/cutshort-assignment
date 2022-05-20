import FormContent from "../UI/FormContent";
import FormText from "../UI/FormText";

const WelcomePage = (props) => {

  const onSubmitHandler = (first) => {
    props.updateName(first);
    props.updateCounter();
  };
  return (
    <div>
      <FormText
        heading="Welcome! First things first..."
        subHeading="You can always change them later"
      />
      <FormContent
        firstField="Full Name"
        secondField="Display Name"
        urlInput={false}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default WelcomePage;
