import InitialDwarf from './images/dwarf.png';
import SleepyDwarf from './images/sleepy.png';
import './App.css';
import ProveForm from './components/proveForm'
import { Component, useState } from 'react'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      lordIsHere: false,
      message: "Are you my giant?",
      dwarfImage: InitialDwarf,
      thanksLink: ""
    }
  }

  toggleShowForm = () => {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }

  handleWrongLord = (message) => {
    this.setState({
      ...this.state,
      message,
      dwarfImage: SleepyDwarf
    });
    this.toggleShowForm()
  }

  handleSuccessLord = (response) => {
    this.setState({
      ...this.state,
      lordIsHere: true,
      message: response.message,
      dwarfImage: InitialDwarf,
      thanksLink: response.thanksLink
    });
    this.toggleShowForm()
  }

  sayThanks = () => {
    window.location.href = this.state.thanksLink;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.dwarfImage} className="App-logo" alt="logo" />
          {this.state.lordIsHere ?
            (<div>
              <div>
                {this.state.message}
              </div>
              <button
                className="App-link"
                onClick={this.sayThanks}>Say Thanks!</button>
            </div>) :
            (<div>
              <p>
                {this.state.message}
              </p>
              {
                !this.state.showForm ?
                  <button
                    onClick={this.toggleShowForm}
                    className="App-link">
                    prove it!
              </button>
                  : <ProveForm
                    onWrongLord={this.handleWrongLord}
                    onSuccessLord={this.handleSuccessLord}></ProveForm>
              }
            </div>)
          }

        </header>
      </div>
    );
  }
}

export default App;
