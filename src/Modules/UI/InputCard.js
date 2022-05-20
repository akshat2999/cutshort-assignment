import { Card } from "antd";
import './InputCard.css';
const InputCard = (props) => {
  return (
    <Card hoverable
     style={{ width: 200 }}>
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
    </Card>
  );
};
export default InputCard;
