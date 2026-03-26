import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import Secondcomponent from './Secondcomponent';
import StateExample from './StateExample';
import BootstrapExample from './BootstrapExample';
import MaterialExample from './MaterialExample';
function App() {
  let a=10
  const name="abcd"
  var age=25
  return (
    <>
    <div>
      {/* <h3>First react project</h3>
      <h4>Name is - {name} </h4>
      <h4>Age is - {age} </h4>
      <h4>A is - {a} </h4>
      <h4>Addition is - {2+7} </h4> */}
      {/* <Firstcomponent myname={name} myage={age}/>
      <Secondcomponent /> */}
    </div>
    {/* <StateExample /> */}
    {/* <BootstrapExample /> */}
    <MaterialExample />
    </>
   
  );
}
export default App;
