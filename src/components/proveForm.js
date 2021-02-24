import React from 'react';
import checkLordName from '../api'

class ProveForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    submit = () => {
        console.log(this.state.lordName)
        checkLordName(this.state.lordName, (res) => {
            console.log(res)
            if (!res.data.success){
                this.props.onWrongLord(res.data.message)
            } else{
                this.props.onSuccessLord(res.data)
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            lordName: event.target.value
        });
    }

    render() {
        return <div>
            <div>
                Please type your name:
            </div>
            <div className="input-container">
                <input type="text" className="input-box" onChange={this.handleChange}></input>
            </div>
            <button className="App-link" onClick={this.submit}>Ohh mighty!</button>
        </div>
    }
}

export default ProveForm;