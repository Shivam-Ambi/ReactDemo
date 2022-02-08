import React, { useState } from 'react';
function BtnComp(props) {
    let [defaultValue, setDefaultValue] = useState();
    function sendValue(e) {
        if (defaultValue) {
            console.log("Clicked sendval ", defaultValue);
            props.recieveDefaultValue1(defaultValue);
        }
        else {
            setDefaultValue(props.countValue1);
        }

    }
    function recieveValue(e) {
        console.log(e.target.value);
        if (e.target.value === NaN) {
            setDefaultValue(0);
        }
        // defaultValue = e.target.value;
        setDefaultValue(parseInt(e.target.value));
    }
    function incrementVal(e) {
        props.incVal1();       //will increment default values only
        if (defaultValue === NaN || defaultValue === undefined) {
            defaultValue = props.countValue1;

        }
        else { setDefaultValue(defaultValue + 1); }
    }
    return (
        <div className='btnBox'>
            <input type="text" onChange={recieveValue} value={defaultValue}></input>
            <button onClick={sendValue}>submit</button>
            <button onClick={incrementVal}>clickMe</button>
        </div>
    )
}
export default BtnComp;
