import React, { useState, useEffect } from "react";

const InputBox = props => {
  const [txt, setTxt] = useState("");

  useEffect(() => {
    props.updateTxt(txt);
  }, [txt]);

  return (
    <input
      type="text"
      style={{width:200, height:40, borderWidth:1, borderColor:'#000', padding:5}}
      value={txt}
      placeholder='type a name like Sudheer'
      onChange={newtxt => {
        setTxt(newtxt.target.value);
      }}
    ></input>
  );
};
export default InputBox;
