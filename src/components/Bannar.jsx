/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";

const Bannar = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Carousel>
            {/*<Carousel.Item>*/}
            <img
              className="d-block w-100"
              src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="text-center">
                <h1 className="pt-4">
                  Generate more leads
                  <br />
                  with all professional
                  <br />
                  landing page!
                </h1>
              </div>

              <Form className="text-center">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  style={{}}
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email address" />
                </Form.Group>
              </Form>
              <button
                type="submit"
                style={{
                  backgroundColor: "#246BD2",
                  borderRadius: "10px",
                  borderColor: "#246BD2",
                }}
              >
                Submit
              </button>
            </Carousel.Caption>
            {/* </Carousel.Item>*/}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default Bannar;
