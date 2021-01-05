import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>hello world</h1> */}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
