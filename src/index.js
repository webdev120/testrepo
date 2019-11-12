import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <StyledDiv>sefsdf </StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  background: red;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
