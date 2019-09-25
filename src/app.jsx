import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div class="container">
      <div class="row">
        <div class="column-due">
          <div class="panel">
            <div class="panel-head">Header Text
              <div class="panel-body">This is the total due.
                <input type="number" name="" id="" placeholder="amount due"/>
              </div>
              <div class="panel-body">
                <input type="number" name="" id="" placeholder="amount received"/>
              </div>
              <div class="panel-footer">
                <button class="button">HITME</button>
              </div>
            </div>

          </div>
        </div>

        <div class="column-change">
          <div class="panel">
            <div class="panel-head">
              This is change amount to return
            </div>
            <div class="panel-row">
              <div class="panel-column"></div>
              <div class="panel-column"></div>
              <div class="panel-column"></div>
              <div class="panel-column"></div>
            </div>
            <div class="panel-row">
              <div class="panel-column"></div>
              <div class="panel-column"></div>
              <div class="panel-column"></div>
              <div class="panel-column"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;



