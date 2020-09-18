import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'


const FeaturedProjects = () => {

  return(
    <Carousel >
    
      <Carousel.Item className="carousel-items">
        <img
          className="d-block w-100"
          src="https://i.imgur.com/kX1dg2O.png"
          alt="First slide"
        />	
        <Carousel.Caption >
          <h3 className="blackTextOverride" >Invoice Tracker App</h3>
          <p className="blackTextOverride">An invoice tracking app that helps companies or individuals stay organized for efficient data retrieval.</p>
          <Link  to={`/InvoiceTracker`}>More about Invoice Tracker App<br/> </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item > 
        <img
          className="d-block w-100"
          src="https://i.imgur.com/AuHF9Fd.png"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-items">
          <h3 className="blackTextOverride" >NYC PupPals</h3>
          <p className="blackTextOverride">An app that helps users socialize and create play-dates for their puppies in NYC</p>
          <Link  to={`/NYC-PupPals`}>More about NYC PupPals App<br/> </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-items"> 
        <img
          className="d-block w-100"
          src="https://i.imgur.com/4nLDEW5.png"
          alt="Third slide"
        />
        <Carousel.Caption >
          <h3 className="blackTextOverride" >Event Live Streams</h3>
          <p className="blackTextOverride">An app that allows users to post upcoming live stream events</p>
          <Link  to={`/EventLiveStreams`}>More about Event Live Stream App<br/> </Link>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default FeaturedProjects

