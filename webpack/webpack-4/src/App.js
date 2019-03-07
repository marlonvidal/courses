import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer.jsx";

const App = () => {
  return <FormContainer />;
};

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
