import React, { useState } from "react";

const ChildComp = props => {
  const [txt, setTxt] = useState({});
  return (
    <div>
      <ul>
        {props.data.map((item, key) => {
          return (
            <li key={key} onClick={() => setTxt(item)}>
              {item.name}
            </li>
          );
        })}
      </ul>

      <div>
        {!!txt.name && (
          <p>
            <span style={{ color: "red" }}>{"Selected: "}</span>
            <span style={{ fontSize: 22 }}>{txt.name}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ChildComp;
