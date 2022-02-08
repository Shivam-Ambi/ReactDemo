import { useState } from 'react';
import './App.css';
import BtnComp from './BtnComp';
import MyComp from './MyComponent';

function App() {
  let recievedValue = 10;
  let [countValue, setCountValue] = useState(50);
  function recieveDefaultValue(value) {
    console.log("In App", value)
    recievedValue = value;
    countValue = value;

    setCountValue(value);
    console.log("countvalue=>", countValue);
  }
  function incVal() {
    setCountValue(countValue + 1);
  }
  return (
    <div>
      <BtnComp recieveDefaultValue1={recieveDefaultValue} countValue1={countValue} incVal1={incVal} />
      <MyComp id="myComp" name="firstComponent" style={{ color: 'red' }} count={countValue}>
        <div>Hello</div>
        <div>World</div>
        <div>Covid</div>
      </MyComp>
      <MyComp id="nameComp" name="Yogesh" style={{ color: 'yellow', backgroundColor: 'red' }} count={countValue + 20} />
    </div>
  );
}

export default App;
