import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const EventLiveStreams = () =>{
  return(
    <div>
    <Row>
        <Col xs={6} md={4}>
        <br />
        <Image width= "95%" src="https://previews.dropbox.com/p/thumb/AA5oexYHv86EoDcZxkha6Lz19JD9xSEJ2vO9xs402By4QhOoDd5Egh7L4Zqfi5LvVamqOPeNAqGzxiPpG0pIEJ8ymJzkFQi_soPU1RriUq-C1LyxoEjkDF6l9Grs6x8ycOuenMqXi4QQo-fqERRC2tgbfueg7YlbDYQri_wC5v-Aa6gwrKLylk-9-ch6vQ7QMbSlDkn1Jl1TBKwZGRMXfH52yNRZak0mz4JsLBP4RvRqs3bkOdr--F35lzm6xFnEj6xJuJOIygXCDWac2oxZD7JjIQ4YvnydtFI8ehIlOJNxcuxhzel0mlirjm0jTfiLKy4vVrQx1LvLvyxVheMBxz5fiseW5KW_z5Go4pgc_YqZLw/p.png?fv_content=true&size_mode=5"  />
        </Col>
        <Col xs={6} md={5}>
          <br />
          <h2 className="underline_header"> About Event Live Streams</h2>
          <p style={{textAlign: "left"}}>
            Event Live Streams was created out of my love for music and concerts. 
            At the start of Covid there was an influx of musicians figuring out what to do now that shows were all canceled. Musicians started live streaming "mini" shows that their fans could watch.
            The only issue was that there was no one place to find all these live streams, fans had to search on their own. 
            <br/><br/>
            My app allows users to sign up, post events and favorite events. On a users profile page they can see all their events as well as the events they favorited.
            The search bar allows users to search anything and will get separated results for genres, artists, and event titles.
          </p>
          <h4 className="underline_header">Technical Aspects</h4>
          <p style={{textAlign: "left"}}>
            This app is built with just Ruby on Rails and features conventional RESTful routing.
          </p>
          <h4 className="underline_header"> Video Demo </h4>
          <iframe width="95%" height="315" src="https://www.youtube.com/embed/SLkeeeffNBY" allowfullscreen></iframe>
          <br/><br/>
          <h4 >To view the app please check out the Github repo. </h4>
          <a href='https://github.com/mattenbar/EventLiveStreams' target="_blank">Event Live Streams Repo</a>
        </Col>
      </Row>
      
    </div>
  )

}

export default EventLiveStreams