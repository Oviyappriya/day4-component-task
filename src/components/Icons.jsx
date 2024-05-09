// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const Icons = () => {
  return (
    <Container className="my-1">
      <Row className="align-items-center ">
        <Col md={7}>
          <Image
            src={
              "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
            }
            fluid={true}
            alt="Showcase"
          ></Image>
        </Col>
        <Col md={5}>
          <div>
            <h3>Fully Responsive Design</h3>
            <p className="lead text-muted">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether its a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
        </Col>
      </Row>
      <Row md={12} className="align-items-center">
        <Col md={6}>
          <div>
            <h3>Updated For Bootstrap 5</h3>
            <p className="lead text-muted">
              Newly improved, and full of great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Image
            src={
              "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
            }
            fluid={true}
            alt="Showcase2"
          ></Image>
        </Col>
      </Row>
      <Row className="align-items-center ">
        <Col md={7}>
          <Image
            src={
              "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
            }
            fluid={true}
            alt="Showcase"
          ></Image>
        </Col>
        <Col md={5}>
          <div>
            <h3>Easy to Use & Customize</h3>
            <p className="lead text-muted">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Icons;
