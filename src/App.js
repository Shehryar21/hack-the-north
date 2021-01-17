import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col";
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  marginBottom: 30,
  padding: 8,
};

const style2 = {
  margin: 50,
  pading: 50,
};

const style3 = {
  marginBottom: 40,
};

class App extends React.Component {
  state = {
    items: [],
    hasMore: true,
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // GET request using fetch with error handling
    fetch("get")
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.setState({ items: data });
      })
      .catch((error) => {
        console.error("There was an error!",error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("for")
    fetch("/get_guide?guide=" + form.elements.search.value)
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        console.log(data)
        this.setState({ items: [data] });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  /*
  fetchMoreData = () => {
    if (this.state.items.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    fetch('/get')
        .then(response => response.json())
        .then(data => console.log(data));
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };
  */

  render() {
    if (this.state.items === []) return null;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Tours By Locals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl
                id="search"
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <hr />

        <InfiniteScroll
          dataLength={this.state.items.length}
          hasMore={this.state.hasMore}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row>
            {this.state.items.map((i, index) => (
              <Col md={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://louisville.edu/enrollmentmanagement/images/person-icon/image"
                  />
                  <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                    <Card.Text>{i.description}</Card.Text>
                    <Card.Text>{i.phone}</Card.Text>
                    <Card.Text>{i.interests}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
