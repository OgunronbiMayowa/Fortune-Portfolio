import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import BackgroundTop from "../assets/img/background-top.png";
import BackgroundBottom from "../assets/img/background-bottom.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>I am passionate about creating content that informs, inspires, and converts. By staying ahead of digital trends and consumer behavior, I develop strategic content and product solutions that strengthen brand presence, engage audiences, and deliver measurable business results.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Content Strategy & Planning</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Social Media Management</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Content Development</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Creative Writing</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Brand Development & Storytelling</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>SEO Optimization</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Product Positioning & Market Strategy</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Sales Management</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Communication & Negotiation Skills</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Research & Analytical Thinking</h5>
                      </div>
                      {/* <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Node JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Express JS</h5>
                      </div> */}
                    </Carousel>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
      <img className="background-top" src={BackgroundTop} alt="background-top" />
      <img className="background-bottom" src={BackgroundBottom} alt="background-bottom" />
    </section>
  )
}