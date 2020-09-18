import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AboutMe = () =>{
  return(
    <div>
    <Row>
          <Col xs={6} md={4}>
            <br></br>
            <Image  src="https://pbs.twimg.com/profile_images/1293206456280506369/gqjy9Kyp_400x400.jpg" roundedCircle />
            <br /><br />
            <a href="https://github.com/mattenbar" target="_blank">
              <Image  height="40px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" roundedCircle />
            </a>
              &nbsp;
            <a href="https://www.linkedin.com/in/matthew-enbar/" target="_blank">
              <Image height="35px" src="https://www.seekpng.com/png/small/154-1546943_jpg-transparent-stock-linkedin-logo-svg-png-icon.png" roundedCircle />
            </a>
              &nbsp;&nbsp;
            <a href="https://twitter.com/MattEnbar" target="_blank">
              <Image height="35px" src="https://simg.nicepng.com/png/small/2-28328_twitter-png-clipart-twitter-logo-png-black.png" roundedCircle />
            </a>
          </Col>
          <Col>
            <br/><br/>
            <div className="about-me-home-page">
              <h1>Matthew Enbar</h1>
              <h5>Full-Stack Developer | Offering Left Brain Software Engineering Solutions with Right Brain Creativity</h5>
              <br />
              <p>
                I started my journey into coding back in 2009 after High School where I decided to study computer engineering at University Of Central Florida.
                While studying I was always passionate about photography and had a small business on the side. 
                <br/><br/>
                I was given an opportunity to take my photography business to the next level and start working with some of the best musicians in the world so I packed up everything and followed my passion.
                My photography led me to travel the world photographing the likes of Snoop Dog, Wu Tang Clan, Stevie Nicks, Bob Sinclar and many more.
                <br/><br/>
                Now after 10 years of amazing experiences I have returned to my passion of coding. At the start of the pandemic I was able to secure a spot at Flatiron School - voted the number 1 coding boot camp by Course Report.
                <br/><br/>
                At Flatiron I learned not just how to code but how to learn and love to learn.
              </p>
              <br/>
              <h5>Other Passions</h5>
                <ul>
                  <li>Cooking - feel free to send me your favorite recipes!</li>
                  <li>Snowboarding - My goal is to snowboard in every continent</li>
                  <li>Traveling - I have traveled to 40+ states and 20+ countries</li>
                </ul>
            </div>
          </Col>
        </Row>
      </div>
  )
}

export default AboutMe