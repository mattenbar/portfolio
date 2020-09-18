import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import{ init } from 'emailjs-com';
init("user_pbewGaer9GHlj1ur1WGW3");


class ContactMe extends React.Component {
  
  state = {
    email: '',
    subject: '',
    message: ''
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleEmailSubmit = (event) => {
    event.preventDefault()
    debugger
    window.emailjs.send(
      "service_hmthz8k", "template_ix6zjpp", this.state)
      .then(res => {alert("Email successfully sent")})
      .catch(err => {alert("There was an error sending your email")})
      
      this.setState({
      email: '',
      name: '',
      subject: '',
      message: ''
    })
  }

  render(){
    return(
      <div className="contact-form">
        <Form >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Your Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={this.state.email} name="email" onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" placeholder="enter name" value={this.state.name} name="name" onChange={this.handleFormChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="subject" value={this.state.subject} name="subject" onChange={this.handleFormChange}/>
          </Form.Group>
    
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Message</Form.Label>
            <Form.Control as="textarea" rows="20" value={this.state.message} name="message" onChange={this.handleFormChange}/>
          </Form.Group>

          <Button variant="dark" onClick={this.handleEmailSubmit}>Send Email</Button>
        </Form>
      </div>
    )
  }

}

export default ContactMe