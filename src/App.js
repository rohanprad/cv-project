import React, { Component } from 'react';
import Display from './components/Display'
import Edit from './components/Edit'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: true,
      fullName: '',
      email: '',
      phone: '',
      institution: '',
      institutionStart: '',
      institutionEnd: '',
      companyName: '',
      companyRole: '',
      companyStart: '',
      companyEnd: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
    console.log(this.state[name]);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ edit: false })
  }

  render() {
    if (this.state.edit) {
      return (
        <>
          <Edit
            name={this.state.fullName}
            email={this.state.email}
            phone={this.state.phone}
            institution={this.state.institution}
            institutionStart={this.state.institutionStart}
            institutionEnd={this.state.institutionEnd}
            companyName={this.state.companyName}
            companyRole={this.state.companyRole}
            companyStart={this.state.companyStart}
            companyEnd={this.state.companyEnd}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </>
      )
    }
    return (
      <>
        <Display
          name={this.state.fullName}
          email={this.state.email}
          phone={this.state.phone}
          institution={this.state.institution}
          institutionStart={this.state.institutionStart}
          institutionEnd={this.state.institutionEnd}
          companyName={this.state.companyName}
          companyRole={this.state.companyRole}
          companyStart={this.state.companyStart}
          companyEnd={this.state.companyEnd}
          handleEdit={this.handleEdit}
        />
      </>
    )
  }
}

export default App;
