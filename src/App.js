import InitialDwarf from './images/dwarf.png';
import SleepyDwarf from './images/sleepy.png';
import './App.css';
import ProveForm from './components/proveForm'
import EncryptedMessage from './components/encryptedMessage'
import { Component, useState } from 'react'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      lordIsHere: false,
      message: "Are you my giant?",
      dwarfImage: InitialDwarf,
      thanksLink: "",
      encrypted: {},
      decrypted: false
    }
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
      encrypted: response.encrypted,
      dwarfImage: InitialDwarf,
      message: "My giant!! I missed you!",
      thanksLink: response.thanksLink
    });
  }

  handleSuccessDecrypt = (response) => {
    this.setState({
      ...this.state,
      lordIsHere: true,
      encrypted: response.encrypted,
      dwarfImage: InitialDwarf,
    });
  }

  handleDecryptFail = (message) => {
    this.setState({
      ...this.state,
      message
    });
  }

  handleDecryptSuccess = (message, thanksLink) => {
    this.setState({
      ...this.state,
      message,
      decrypted: true,
      thanksLink: thanksLink
    });
  }

  sayThanks = () => {
    window.location.href = this.state.thanksLink;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.dwarfImage} className="App-logo" alt="logo" />

          <p>
            {this.state.message}
          </p>
          {this.state.decrypted ?
            (<div>
              <button
                className="App-link"
                onClick={this.sayThanks}>Say Thanks!</button>
            </div>) :
            this.state.lordIsHere ?
              (<div>
                <EncryptedMessage encrypted={this.state.encrypted}
                  onDecryptSuccess={this.handleDecryptSuccess}
                  onDecryptFail={this.handleDecryptFail}></EncryptedMessage>

              </div>) :
              (<div>
                {<ProveForm
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
