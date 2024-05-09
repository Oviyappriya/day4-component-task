// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
const Child = (props) => {
  const { title, text } = props;
  return (
    <Container className=" border border-light">
      <Row className="p-3 mb-2 bg-light text-dark">
        <Col md={4}>
          <div className="text-primary p-5 fa-2x">{props.Icon}</div>
        </Col>
        <Col md={4} className="p-5">
          <h3>{title}</h3>
        </Col>
        <Col md={4} className="p-5">
          <div>
            <h5>{text}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Child.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  Icon: PropTypes.node,
};

export default Child;
