import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const PupPalsNYC = () => {

  return(
    <div>
    <Row>
        <Col xs={6} md={4}>
        <br />
        <Image width= "80%" src="https://previews.dropbox.com/p/thumb/AA4IsEG3OB3c-9qmnvyu18uE5BOveYAHhH6_ELW3sK0ZUrpt35DMcE0aeR5XTVD8uVrQoFOT62QvkTEakwECUuQ8ExF_bXBvZUYDr1f8S1-rhuoduIwxB8tpZih4LpMZBtCwMDvSvjA0uODg8VphaVKEy4NkTmJD0SSdgww9ZJCbwVmaMKHgrO_f1CWL6b9ExJ_38Hk6h-LxA-GakJfAPVwS1tLBaBJ5Hi86NPg3Faiw2hpzf7zCdxH6E4PKHZrB5j0FzJGAHuiZ7BEL6KHBJ3F50fUuCJeTMSfnc4Lt_5kN2D3zsaDcA2yCtbL1bKzOdn62FaLq9WWYqM5O8sOT9sRnjbSbfeH0YshAbJVZO8mvWQ/p.png?fv_content=true&size_mode=5"  />
        </Col>
        <Col xs={6} md={5}>
          <br />
          <h2 className="underline_header"> About NYC PupPals</h2>
          <p style={{textAlign: "left"}}>
            During Covid there has been a dramatic spike in the amount of new dog owners, myself being one of them.
            One of the most important aspects to being a new dog owner is socializing your puppy.
            While you can train your puppy to do tricks unless you know someone with another dog you wont be able to socialize them.
            Proper socialization of puppies at a young age insures friendliness towards other dogs and humans as well.
            <br/><br/>
            The app works in a similar fashion to common dating apps where you see a profile and can give it a thumbs up or down.
            If someone has liked your profile you can view them under the "liked me" tab and choose to contact them.
          </p>
          <h4 className="underline_header">Technical Aspects</h4>
          <p style={{textAlign: "left"}}>
            This app is built using Ruby on Rails with RESTful API for the back-end and vanilla JavaScript for the front end.
            For image uploading I used Cloudinary free Api.
          </p>
          <h4 className="underline_header"> Video Demo </h4>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iOMUrnHhlus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br/><br/>
          <h4>To view the app please check out the Github repos. </h4>
          <br/>
          <a href='https://github.com/mattenbar/PupPals_frontend' target="_blank">Pup Pals Front End</a>
          <br />
          <a href='https://github.com/mattenbar/PupPals_backend' target="_blank">Pup Pals Back End</a>
        </Col>
      </Row>
      
    </div>
  )
}

export default PupPalsNYC