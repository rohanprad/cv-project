import React, { Component } from 'react'
import General from './General'
import Education from './Education'
import Work from './Work'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'edit'
        }
    }

    render() {
        const { name, email, phone, institution, institutionStart, institutionEnd, companyName, companyRole, companyStart, companyEnd, handleChange, handleSubmit } = this.props
        return (
            <>
                <header>
                    <h1>CV Generator</h1>
                </header>
                <div className="container">
                    <form onSubmit={handleSubmit}>

                        <h2 className="form-section-title">General Info</h2>
                        <General
                            status={this.state.status}
                            name={name}
                            email={email}
                            phone={phone}
                            handleChange={handleChange}
                        />

                        <h2 className="form-section-title">Education</h2>
                        <Education
                            status={this.state.status}
                            institution={institution}
                            institutionStart={institutionStart}
                            institutionEnd={institutionEnd}
                            handleChange={handleChange}
                        />

                        <h2 className="form-section-title">Work Experience</h2>
                        <Work
                            status={this.state.status}
                            companyName={companyName}
                            companyRole={companyRole}
                            companyStart={companyStart}
                            companyEnd={companyEnd}
                            handleChange={handleChange}
                        />

                        <button className="form-submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Edit