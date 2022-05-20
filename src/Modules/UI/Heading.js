import FormText from "./FormText";

const Heading = () => {
  return (
    <div style={{'display' : 'inline-flex' , 'justifyContent' : 'center','paddingTop': '5%','paddingBottom':'2%'}}>
      <img src={require("../../assets/logo.jpg")} alt="" width="35px" height="35px" style={{'paddingRight': '5px' , 'marginTop': '7px'}} />
      <FormText heading="Eden"/>
    </div>
  );
};

export default Heading;
