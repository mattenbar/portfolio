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
        <Image width= "95%" src="https://previews.dropbox.com/p/thumb/AA74jloBptgh4zVV1g6u0GznG4oCNQ2zEJDOIYpvKtnghxqXqI1AiexTCkNz0k72A136tiMR7l11hgghzoD4SRLwVlSKbMSXf-JNXlf_HCc7DGQ-lnkUhI-sgMz5TOA7qc2gcmJWdt74nVuzJYPu_QLVkEWZLUD0NFnx1EbWvAODNZeinlFjQ4-oz5dBi4Fo5eYJb3oHpBjJZ8LmToUDFQ9NpJRXYHCd5ImaoWZNvpezx1_XyJjb5GhPbuaEYsWBboKffNXb9t1qziG94UfzhQGhtwzsf5mcGqKPMvDFAy9qRM9LrAedbixIhyAaR4bwCvyNB5TBPh46vLp0JTuPRR51KpR4J13lF8B_RPTRWcW0bg/p.png?fv_content=true&size_mode=5"  />
        </Col>
        <Col xs={6} md={5}>
          <br />
          <h2> About Invoice Tracker</h2>
          <p style={{textAlign: "left"}}>
            Invoice Tracker is an app built to help keep track of invoices. The app allows users to create invoices for customers as well as keep their invoices organized.
            Users can go to customers pages to see all the invoices for an single customer. Invoices can be marked as paid or unpaid. If the invoice is unpaid it will be displayed on the home page. 
            Along with viewing the unpaid invoices on the home page, users also can see all the money they have made and money they are still owed. 
            Finally users can directly email customers individual invoices.
          </p>
          <h4> Video Demo </h4>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Uh_hVCdiziw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br/>
          <h4>To view the app please check out the Github repos. </h4>
          <a href='https://github.com/mattenbar/invoices-frontend'>Invoice Tracker Front End</a>
          <br />
          <a href='https://github.com/mattenbar/invoices-backend'>Invoice Tracker Back End</a>
        </Col>
      </Row>
      
    </div>
  )
}

export default InvoiceTracker