// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
const Child = (props) => {
  const { title, text } = props;
  return (
    <Container className=" border border-light">
      <Row className="p-3 mb-2 bg-light text-dark">
        <Col md={4} className="p-5">
          <h6>{title}</h6>
        </Col>
        <Col md={4} className="p-5">
          <div>
            <p>{text}</p>
          </div>
        </Col>
        <Col md={4} className="p-5">
          <div>
            <img
              src={props.image}
              className="rounded-circle"
              style={{
                height: "100px",
                width: "200px",
                objectFit: "contain",
                borderRadius: "1em",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Child.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

export default Child;
