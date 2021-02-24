import React from 'react';
import api from '../api'

class EncryptedMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    submit = () => {
        console.log(this.state.lordName)
        api.decryptMessage(this.props.encrypted, this.state.key, (res) => {
            console.log(res)
            if (!res.data.success) {
                this.props.onDecryptFail("That was the wrong key dear giant. Try again:")
            } else {
                this.props.onDecryptSuccess(res.data.decrypted, res.data.thanksLink)
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            key: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    I have an encrypted mesasge for you. Only you posses the key to decrypt it:
                </div>
                <div>
                    {this.props.encrypted.content}
                </div>
                <div>
                    Enter the key:
                </div>
                <div className="input-container">
                    <input type="text" className="input-box" onChange={this.handleChange}></input>
                </div>
                <button className="App-link" onClick={this.submit}>Ohh mighty!</button>
            </div>
        )
    }
}

export default EncryptedMessage;