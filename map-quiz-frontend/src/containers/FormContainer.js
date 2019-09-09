import React from 'react'

class FormContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return(
            <div className="ui equal width form">
                <div className="fields">
                    <div className="field">
                    <label>Username</label>
                    <input type="text" placeholder="Username"></input>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <input type="password"></input>
                    </div>
                </div>
            </div>
           
        )
    }


}

export default FormContainer;