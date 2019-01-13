import React from "react";
import './test-ask.scss'
import "./c";
import "./d";
export default class TestAsk extends React.Component {
  constructor(props) {
      super(props)
    this.state = {
      yes: false
    };
    var yesTrue;
  }
 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ yes: true });
    }, 4000);
    console.log('TestAsk in index.js')
  }
  render() {
   
    return (
      <div className="TestAsk">
        <p className="Question">-Руся, будеш цукерки?</p>
        {this.state.yes && <p className="Answer">-Дя!</p>}
      </div>
    );
  }
  
}
