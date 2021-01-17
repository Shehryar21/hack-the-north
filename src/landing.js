import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NavBar from './components/navbar.js'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import './landing.css'
import history from './history';

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  marginBottom: 30,
  padding: 8
};

const style2={
  margin: 50,
  pading:50
};

const style3={
  marginBottom: 40
};

class Landing extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  const

  render() {
    return (
      <div>
        <NavBar></NavBar>
      <Carousel fade={true} className="AppComp1">
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://bigseventravel.com/wp-content/uploads/2020/03/elchalten.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption">
          <h1 className="title" style={{
            fontSize: '100px'
          }}>Tours by Locals</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://www.scenic.ca/-/media/scenic/australia-old/content-pages/river-cruises/european/2019/scenic-diamond.jpg?mw=1024&hash=FF304C201A65C6AFFF906CBCBE53CB5BF3F30C2C"
            alt="Third slide"
          />
          <Carousel.Caption className="caption">
          <h1 className="title" style={{
            fontSize: '100px'
          }}>Tours by Locals</h1>
          <button className="myButton">View all our Guides</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pix10.agoda.net/hotelImages/4889738/0/613e7c93f793ce121088095cd566c4ab.jpg?s=1024x768"
            alt="Third slide"
          />
          <Carousel.Caption className="caption">
          <h1 className="title" style={{
            fontSize: '100px'
          }}>Tours by Locals</h1>
          <button className="myButton">View all our Guides</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );

    
  }
}


export default Landing;
