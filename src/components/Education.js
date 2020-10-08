import React, { Component } from 'react'

class Education extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { status, institution, institutionStart, institutionEnd, handleChange } = this.props
        if (status === 'edit') {
            return (
                <>
                    <label htmlFor="insititution">Institution<br />
                        <input
                            type="text"
                            name="institution"
                            value={institution}
                            placeholder="Enter Institution Name"
                            onChange={handleChange}
                        />
                    </label><br />


                    <label htmlFor="institutionStart">Started<br />
                        <input
                            type="date"
                            name="institutionStart"
                            value={institutionStart}
                            onChange={handleChange}
                        />
                    </label><br />


                    <label htmlFor="institutionEnd">Completed<br />
                        <input
                            type="date"
                            name="institutionEnd"
                            value={institutionEnd}
                            onChange={handleChange}
                        />
                    </label><br />
                </>
            )
        }
        return (
            <div className="infoDiv">
                <h2>Education</h2>
                <p>Institution: <span className="info">{institution}</span></p>
                <p>Started: <span className="info">{institutionStart}</span></p>
                <p>Completed: <span className="info">{institutionEnd}</span></p>
            </div>
        )
    }
}

export default Education