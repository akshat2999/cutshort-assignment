import "antd/dist/antd.css";
import { Steps } from "antd";

import "./PageNumber.css";
import StepIcon from "./StepIcon";
const { Step } = Steps;

const PageNumber = (props) => {
  return (
    <div className="box">
      <Steps current={props.counter}>
        <Step
          key={props.counter}
          icon={<StepIcon number={1} active={props.counter + 1 >= 1} />}
        />
        <Step
          key={props.counter}
          icon={<StepIcon number={2} active={props.counter + 1 >= 2} />}
        />
        <Step
          key={props.counter}
          icon={<StepIcon number={3} active={props.counter + 1 >= 3} />}
        />
        <Step
          key={props.counter}
          icon={<StepIcon number={4} active={props.counter + 1 >= 4} />}
        />
      </Steps>
    </div>
  );
};

export default PageNumber;
