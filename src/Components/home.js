import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FeaturedProjects from './FeatureProjects'


const Home = () =>{

  
    return (
      <div>
        <Row>
          <Col xs={6} md={4}>
            <br></br>
            <Image src="https://pbs.twimg.com/profile_images/1293206456280506369/gqjy9Kyp_400x400.jpg" roundedCircle />
          </Col>
          <Col>
            <br/><br/><br/>
            <div className="about-me-home-page">
              <h1>Matthew Enbar</h1>
              <h5>Full-Stack Developer | Offering Left Brain Software Engineering Solutions with Right Brain Creativity</h5>
              <br />
              <p>Experienced in Ruby on Rails and JavaScript based programming and a background in Photography.
              <br /> 
              Possessing strong skills in team-building, project management, and leadership that help companies solve technical problems while allowing for scalable growth.
              <br />
              As a photographer I led various projects and collaborated with cross functional stakeholders to discuss opportunities and offer a unique perspective to help build brand awareness, unique content and company growth.
              <br /><br />
              Technical Skills:
              <br />
              CSS, Git, HTML, JavaScript, Postgres, React, Redux, Ruby, Ruby on Rails, Sinatra, SQL. 
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} >
            <br /><br /><br />
            <div className="featured-projects-carousel-home">
              <FeaturedProjects />
            </div>
          </Col>
        </Row>
      </div>
    )
  
}

export default Home