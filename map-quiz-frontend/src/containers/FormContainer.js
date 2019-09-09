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
            <div className='ui form'>
              
                    <div className="field">
                    <label>Username</label>
                    <input onChange={this.loginChange} type="text" name='username' placeholder="Username"></input>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <input onChange={this.loginChange} name='password' type="password"></input>
                    </div>
               
                <div className='ui submit button'>Play</div>
            </div>
           
        )
    }


}

export default FormContainer;