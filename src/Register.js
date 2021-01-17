import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './components/navbar.js'

const style2={
  margin: 50,
  pading:50
};


class Registration extends React.Component {

    handleSubmit = (event) => {
        console.log("jdkfkls")
        const form = event.currentTarget;
        console.log(form);
        fetch('/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: form.elements.Name.value,
            city: form.elements.City.value,
            country: form.elements.Country.value,
            interests: form.elements.Interests.value,
            phone: form.elements.Phone.value,
            description: form.elements.Description.value,
        })
})
      };


  render() {

    return (
      <div style={style2} >
        <NavBar></NavBar>
        <hr />
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type = "text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="City">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
            </Form.Group>
            <Form.Group controlId="Country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" label="Enter Country" />
            </Form.Group>
            <Form.Group controlId="Interests">
                <Form.Label>Interests</Form.Label>
                <Form.Control type="text" label="Enter your Interests" />
            </Form.Group>
            <Form.Group controlId="Phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" label="Enter your Phone Number" />
            </Form.Group>
            <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" label="Enter Description" />
            </Form.Group>
            <Button variant="primary" type="submit" to="/">
                Submit
            </Button>
        </Form>
      </div>
    );
  }
}


export default Registration;
