import React from 'react';
import api from '../api'

class ProveForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showForm: false
        }
    }

    submit = () => {
        console.log(this.state.lordName)
        this.toggleShowForm()
        api.checkLordName(this.state.lordName, (res) => {
            console.log(res)
            if (!res.data.success) {
                this.props.onWrongLord("Wrong!! You are not my giant. Go away!")
            } else {
                this.props.onSuccessLord(res.data)
            }
        })
    }

    toggleShowForm = () => {
      this.setState({
        ...this.state,
        showForm: !this.state.showForm
      });
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            lordName: event.target.value
        });
    }

    render() {
        return <div>
            {this.state.showForm ? (
                <div>
                    <div>
                        Please type your name:
                    </div>
                    <div className="input-container">
                        <input type="text" className="input-box" onChange={this.handleChange}></input>
                    </div>
                    <button className="App-link" onClick={this.submit}>Ohh mighty!</button>
                </div>
            )
                :
                <button
                    onClick={this.toggleShowForm}
                    className="App-link">
                    prove it!
              </button>
            }
        </div>
    }
}

export default ProveForm;