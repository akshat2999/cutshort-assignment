import { Result } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import SubmitButton from "../UI/SubmitButton";
import './CongratsPage.css'
const CongratsPage = (props) => {
  console.log(props.name)
  return (
    <Result
      status="success"
      key={1}
      icon={<CheckCircleFilled style={{ color: "#664de5" }} />}
      title={"Welcome "+ (props.name ? props.name : "Default Name") }
      subTitle="You have completed onboarding, you can start using the Eden!"
      extra={[<SubmitButton value="Launch Eden" />]}
    />
  );
};

export default CongratsPage;
