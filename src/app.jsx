import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      change: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      changeTotal: 0,
    };
    this.changeInput = this.changeInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  changeInput(event) {
    this.setState({[event.target.name] : [event.target.value]})
  }

  calculate() {
    var changeTotal = this.state.amountReceived - this.state.amountDue;
    var change = changeTotal
    this.setState({changeTotal})

    const twenties = Math.floor(change / 20);
    this.setState({ twenties: twenties });
    var remainder = change % 20;

    const tens = Math.floor(remainder / 10);
    this.setState({ tens: tens });
    var remainder = remainder % 10;

    const fives = Math.floor(remainder / 5);
    this.setState({ fives: fives });
    var remainder = remainder % 5;

    const ones = Math.floor(remainder / 1);
    this.setState({ ones: ones });
    var remainder = remainder % 1;

    const quarters = Math.floor(remainder / .25);
    this.setState({ quarters: quarters });
    var remainder = remainder % .25;

    const dimes = Math.floor(remainder.toFixed(2) / .10);
    this.setState({ dimes: dimes });
    var remainder = remainder % .10;

    const nickels = Math.floor(remainder.toFixed(2) / .05);
    this.setState({ nickels: nickels });
    var remainder = remainder % .05;

    const pennies = Math.floor(remainder.toFixed(2) / .01);
    this.setState({ pennies: pennies });
    var remainder = remainder % .01;
  }

  render() {
    return(
      <div className="container-fluid">
        <br/>
        <br/>
        <div className="row">
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="card-header">
                <h2 className="text-center">Change Calculator</h2>
              </div>
              <div className="card-body">
                <p>How much is due?</p>
                <input type="number" name="amountDue" value={this.state.charge} onChange={this.changeInput}/>
              </div>
              <div className="card-body">
                <p>How much was received?</p>
                <input type="number" name="amountReceived" value={this.state.tender} onChange={this.changeInput}/>
                <p/>
                <p/>
              </div>
              <div className="card-footer">
                <button type="button" name="btn-outline-warning" onClick={this.calculate}>Run</button>
              </div>

            </div>
          </div>

          <div className="col-sm-8">
            <div className="card text-center">
              <div className="card-header">
                <h3 id="output" name="alert alert-success">The total change due is ${this.state.changeTotal}</h3>
              </div>
              <br/>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>$20: <br/>{this.state.twenties}<p/></div></div>
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>$1: <br/>{this.state.ones}<p/></div></div>
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>$10: <br/>{this.state.tens}<p/></div></div>
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>$5: <br/>{this.state.fives}<p/></div></div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>25¢: <br/>{this.state.quarters}<p/></div></div>
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>10¢: <br/>{this.state.dimes}<p/></div></div>
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>5¢: <br/>{this.state.nickels}<p/></div></div>
                  <div className="col-sm-3"><div className="col-sm-6 mx-auto border rounded-sm"><br/>1¢: <br/>{this.state.pennies}<p/></div></div>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;



