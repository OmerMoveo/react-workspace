import React, { createContext, useContext, useRef, useState } from "react";
const Context = createContext();
function App() {
  return (
    <Context.Provider value={{ light: "blue", dark: "black" }}>
      <Hooks />
    </Context.Provider>
  );
}

export default function Hooks() {
  const { light, dark } = useContext(Context);
  return (
    <div>
      <p>{light}</p>
      <p>{dark}</p>
    </div>
  );
}
