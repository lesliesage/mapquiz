import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import LoginContainer from "./containers/LoginContainer.js";
import QuizContainer from "./containers/QuizContainer.js";
import StatsContainer from "./containers/StatsContainer.js";



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <LoginContainer />
        <QuizContainer />
        <StatsContainer />
        
      </div>
    );

  }
}

export default App;
