import React, { useState } from "react";
import "./App.css";
import CountryDropdown from "./component/CountryDropdown";
import { NewsList } from "./component/NewsList";

function App() {
  const [value1, setValue1] = useState(null);
  return (
    <div className="App">
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <CountryDropdown
          prompt="Select Country"
          value1={value1}
          onChange={(val) => setValue1(val)}
        />
      </div>

      <div>{value1 ? <NewsList value1={value1} /> : null}</div>
    </div>
  );
}

export default App;
