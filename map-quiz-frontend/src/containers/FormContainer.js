import React from 'react'

class FormContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    loginChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="ui equal width form">
                <div className="fields">
                    <div className="field">
                    <label>Username</label>
                    <input onChange={this.loginChange} type="text" name='username' placeholder="Username"></input>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <input onChange={this.loginChange} name='password' type="password"></input>
                    </div>
                </div>
            </div>
           
        )
    }


}

export default FormContainer;