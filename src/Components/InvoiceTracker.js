import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const InvoiceTracker = () => {

  return(
    <div>
    <Row>
        <Col xs={6} md={4}>
        <br />
        <Image width= "95%" src="https://i.imgur.com/f63DTIL.png"  />
        </Col>
        <Col xs={6} md={5}>
          <br />
          <h2 className="underline_header"> About Invoice Tracker</h2>
          <p style={{textAlign: "left"}}>
            Invoice Tracker is an app built to help keep track of invoices. The app allows users to create invoices for customers as well as keep their invoices organized.
            Users can go to customers pages to see all the invoices for an single customer. Invoices can be marked as paid or unpaid. If the invoice is unpaid it will be displayed on the home page. 
            Along with viewing the unpaid invoices on the home page, users also can see all the money they have made and money they are still owed. 
            Finally users can directly email customers individual invoices.
          </p>
          <h4 className="underline_header">Technical Aspects</h4>
          <p style={{textAlign: "left"}}>
            This app is built using Ruby on Rails with RESTful API for the back-end and React.js with Redux for the front end.
            For emailing invoices the app used Email.JS to directly email from the front end
          </p>
          <h4 className="underline_header"> Video Demo </h4>
          <iframe width="95%" height="315" src="https://www.youtube.com/embed/Uh_hVCdiziw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br/><br/>
          <h4 >To view the app please check out the Github repos. </h4>
          <a href='https://github.com/mattenbar/invoices-frontend' target="_blank">Invoice Tracker Front End</a>
          <br />
          <a href='https://github.com/mattenbar/invoices-backend' target="_blank">Invoice Tracker Back End</a>
        </Col>
      </Row>
      
    </div>
  )
}

export default InvoiceTracker