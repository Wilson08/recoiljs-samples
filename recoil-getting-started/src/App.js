import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";

const App = () => (
  <RecoilRoot>
    <CharacterCounter />
  </RecoilRoot>
);

export default App;