//Using Only State and props no redux

import React, { useState } from "react";
import ChildComp from "./list";
import InputBox from "./input";

const Main = () => {
  const [txt, setTxt] = useState("");
  let data = [
    { id: 1, name: "Sudheer", title: "SD3" },
    { id: 2, name: "Sudarshan", title: "SD1" },
    { id: 3, name: "Ruchi", title: "Manager" },
    { id: 4, name: "Ruhi", title: "CEO" }
  ];

  return (
    <div>
      <InputBox updateTxt={newValue => setTxt(newValue)} />
      {txt !== "" && (
        <ChildComp
          data={[...data].filter(item =>
            item.name.toUpperCase().includes(txt.toUpperCase())
          )}
          inputValue={txt}
        />
      )}
    </div>
  );
};
export default Main;
