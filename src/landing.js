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
      <div className="AppComp1">
        <div className="move">
          <h1 className='title'>Tours By Locals</h1>
          <Link to='/home'>
            <button className="myButton">View all our Guides</button>
          </Link>
        </div>
      </div>
        
    );

  }
}


export default Landing;
