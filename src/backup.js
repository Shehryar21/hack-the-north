import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


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

class App extends React.Component {
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

  render() {
    return (
      <div style={style2} >
        <h1>Virtual Tours</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          
          {this.state.items.map((i, index) => (
            <div stle={style}>
              <Card style={{ width: '18rem' , margin:'5%'}}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            </div>
            
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}


export default App;
