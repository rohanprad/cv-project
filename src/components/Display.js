import React, { Component } from 'react'
import General from './General'
import Education from './Education'
import Work from './Work'

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'display'
        }
    }

    render() {
        const { name, email, phone, institution, institutionStart, institutionEnd, companyName, companyRole, companyStart, companyEnd, handleEdit } = this.props
        return (
            <div>
                <header className="displayHeader">
                    <h1>Your CV</h1>
                    <a className="edit-button-link" href='#' onClick={handleEdit}><i className='fas fa-edit edit-button'></i></a>
                </header>
                <div className="container">
                    <General
                        status={this.state.status}
                        name={name}
                        email={email}
                        phone={phone}
                    />

                    <Education
                        status={this.state.status}
                        institution={institution}
                        institutionStart={institutionStart}
                        institutionEnd={institutionEnd}
                    />


                    <Work
                        status={this.state.status}
                        companyName={companyName}
                        companyRole={companyRole}
                        companyStart={companyStart}
                        companyEnd={companyEnd}
                    />
                </div>
            </div>
        )
    }
}

export default Display