import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'


const FeaturedProjects = () => {

  return(
    <Carousel >
    
      <Carousel.Item className="carousel-items">
        <img
          className="d-block w-100"
          src="https://previews.dropbox.com/p/thumb/AA5OQARs9C3uxT3Hfw1OBb6R_ACDBi-i9eWdFORd6U1ALFmJJxhqrcEcrVE0PulqCtatZNFwtWfxtMjXUcVyvIxqSS-dseVybEcsBWUFxIS5fPwXUYW9aNcdcqzQLd2hec_UHEugAEwPF6wPXQqd_vZ5D3c9i74CJdHPnJgSPwjyvGgDl04ddhNbqA9vr6yQSn2rSwSq8qlj2g9Ea_b4157Vtd7pFpY2ctRtIZ1sKmSZjlOPMVkSyAnR6LKkSFW57h2O9H_AAbDOFQtpvKWBkVh8LL6x9bQ3kGiXN6_RcmLPohZX2MqjQdKwXkPEfU2Z8o6ChqaibelU4I-LxbVUjap-Ro6zxqaOobKfNyV_V6u1qQ/p.png?size=2048x1536&size_mode=3"
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
          src="https://previews.dropbox.com/p/thumb/AA5oTDVuzLDbOOXPAWj6uee6AYkZE1NQcet7pjRlhTuG2lzOI1HJp_QUHOa6Z0Q_6YGUbAjD4xPJd9KIjc0oH_P-yhKtC112JC6Vg4CYCQ-34Ba3FLFa6bSciWnZrZDc47tZrj17crhc-rUNNWoZY1baZFfBzaPESVWm0or_-8mA5zFOuiMXpRSCUuKVv4THPilawg-MhxQ9KB52vbFHG9l_-K4BXU02Qb06TvuYRDG3NDKmimuCau3grgFSRHSSGEeZTNgcpxdurLeOXAUd7WfJmiRHLQy4XYXfC45ygqwgb5dALJXyjuscuVbCQoTING9ENI98HAcvIA6NyHTCQzis476T1XPtWRXNWsPHkacj5w/p.png?size=2048x1536&size_mode=3"
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
          src="https://previews.dropbox.com/p/thumb/AA5xRaYxNqxLSTYTjRbOqcOM9ABXfvZBlyF0ueAwKXr8Fg-msPHgHySdUzcNaGJK-9RuTAtO6HbY6igBclylnmI8SpRJiGxkpi_UJoSmhD2Mznss7rpwhVYSe0tJKu65v4ZqRwprr3wBF_7k_iADgqDMcj-Wy9AhiISxAGvfk9JEY7KkrVtkOZWU5k6GEdALtR6mJGTdmIRs_DHbUbx2CkpO6SYKgLBjesAEPVzP-IaaEGpUhrWpI1DZc8MunrbNIKBcPF7QGiN1GTnlF2F3In2MN76wBRrOsJ1zOkhwIfJrq8c9M0RpYeVFVRc9I3esd7wFdJp3Z0CJA7SwQJ5q6E3QkNVJLmTlf4sId6KH4wRojQ/p.png?fv_content=true&size_mode=5"
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

