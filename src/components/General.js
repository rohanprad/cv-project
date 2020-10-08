import React, { Component } from 'react'

class General extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { status, name, email, phone, handleChange } = this.props
        if (status === 'edit') {
            return (
                <>
                    <label htmlFor="name">Name<br />
                        <input
                            type="text"
                            name="fullName"
                            value={name}
                            placeholder="Enter your name"
                            onChange={handleChange}
                        />
                    </label><br />

                    <label htmlFor="email">Email<br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </label><br />


                    <label htmlFor="phone">Phone<br />
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            placeholder="Enter your phone number"
                            onChange={handleChange} />
                    </label><br />
                </>
            )
        }
        return (
            <div className="infoDiv">
                <h2>General Info</h2>
                <p>Name: <span className="info">{name}</span></p>
                <p>Email: <span className="info">{email}</span></p>
                <p>Phone: <span className="info">{phone}</span></p>
            </div>
        )
    }
}

export default General