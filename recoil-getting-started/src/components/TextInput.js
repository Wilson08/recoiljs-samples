import React from "react";
import { useRecoilState } from "recoil";

import { textState } from "../recoil/atoms";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <p>Echo: {text}</p>
    </>
  );
};

export default TextInput;
