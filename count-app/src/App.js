import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name:'にんじゃ',
                        count:0};
  }

  handleClick(name){
    this.setState({name:name})
  }

  countapp(){
    this.setState({count: this.state.count +1});
  }

  render() {
    return (
      <div>
        <h1>こんにちは、{this.state.name}さん</h1>
        <button
          onClick={() => {
            {this.handleClick('ひつじ')}
          }}
        >
          ひつじ
        </button>

        <button
          onClick={() => {
            {this.handleClick('にんじゃわんこ')}
          }}
        >
          にんじゃわんこ
        </button>

        <h1>
          {this.state.count}
        </h1>

        <button onClick={()=>{this.countapp()}}>+</button>
      </div>
    );
  }
}

export default App;
