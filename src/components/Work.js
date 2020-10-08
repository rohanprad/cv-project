import React, { Component } from 'react'

class Work extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { status, companyName, companyRole, companyStart, companyEnd, handleChange } = this.props
        if (status === 'edit') {
            return (
                <>
                    <label htmlFor="companyName">Company<br />
                        <input
                            type="text"
                            name="companyName"
                            value={companyName}
                            placeholder="Enter Company Name"
                            onChange={handleChange}
                        />
                    </label><br />


                    <label htmlFor="companyRole">Role<br />
                        <input
                            type="text"
                            name="companyRole"
                            value={companyRole}
                            placeholder="Enter Role"
                            onChange={handleChange}
                        />
                    </label><br />


                    <label htmlFor="companyStart">Started<br />
                        <input
                            type="date"
                            name="companyStart"
                            value={companyStart}
                            onChange={handleChange}
                        />
                    </label><br />


                    <label htmlFor="companyEnd">Completed<br />
                        <input
                            type="date"
                            name="companyEnd"
                            value={companyEnd}
                            onChange={handleChange}
                        />
                    </label><br />
                </>
            )
        }
        return (
            <div className="infoDiv">
                <h2>Work Experience</h2>
                <p>Company: <span className="info">{companyName}</span></p>
                <p>Role: <span className="info">{companyRole}</span></p>
                <p>From: <span className="info">{companyStart}</span></p>
                <p>Till: <span className="info">{companyEnd}</span></p>
            </div>
        )
    }
}

export default Work