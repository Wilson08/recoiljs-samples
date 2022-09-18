import React from "react";
import { useRecoilValue } from "recoil";

import { charCountState } from "../recoil/atoms";

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <p>Character Count: {count}</p>;
};

export default CharacterCount;