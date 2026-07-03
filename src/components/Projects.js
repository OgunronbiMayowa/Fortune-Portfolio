import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import design1 from "../assets/img/design1.jpg";
import design2 from "../assets/img/design2.jpg";
import design3 from "../assets/img/design3.jpg";
import design4 from "../assets/img/design4.jpg";
import design5 from "../assets/img/design5.jpg";
import design6 from "../assets/img/design6.jpg";
import design7 from "../assets/img/design7.jpg";
import design8 from "../assets/img/design8.jpg";
import design9 from "../assets/img/design9.jpg";
import design10 from "../assets/img/design10.jpg";
import design11 from "../assets/img/design11.jpg";
import design12 from "../assets/img/design12.jpg";
import design13 from "../assets/img/design13.jpg";
import design14 from "../assets/img/design14.jpg";
import design15 from "../assets/img/design15.jpg";
import design16 from "../assets/img/design16.jpg";
import projImg1 from "../assets/img/web1.jpg";
import projImg2 from "../assets/img/web2.jpg";
import projImg3 from "../assets/img/web3.jpg";
import projImg4 from "../assets/img/web4.jpg";
import projImg5 from "../assets/img/web5.jpg";
import projImg6 from "../assets/img/web6.jpg";
import projImg7 from "../assets/img/web7.jpg";
import projImg8 from "../assets/img/web8.jpg";
import projImg9 from "../assets/img/web9.jpg";
import projImg10 from "../assets/img/web10.jpg";
import projImg11 from "../assets/img/web11.jpg";
import projImg12 from "../assets/img/web12.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Novarick Homes",
      description: "Real Estate Company",
      imgUrl: projImg1,
      url: "https://novarickhomes.com.ng/"
    },
    {
      title: "Under 40 Landlord",
      description: "Real Estate Initiative",
      imgUrl: projImg2,
      url: "https://campaign.novarickhomes.com.ng/under-40-landlord/"
    },
    {
      title: "Disability Focus Africa",
      description: "Non-Profit Organization",
      imgUrl: projImg3,
      url: "https://disabilityfocusafricana.org/"
    },
    {
      title: "Regent",
      description: "Real Estate Company",
      imgUrl: projImg4,
      url: "http://regentre.co/"
    },
    {
      title: "Manheim Automobile",
      description: "Car Listing Website",
      imgUrl: projImg5,
      url: "https://carlisting.evaluatepr.com/"
    },
    {
      title: "FOG MSL",
      description: "Management Solutions Company",
      imgUrl: projImg6,
      url: "https://fogmsl.com/"
    },
    {
      title: "Sellerrand",
      description: "Real Estate Company",
      imgUrl: projImg7,
      url: "https://sellerrand.com/"
    },
    {
      title: "Regal Uno",
      description: "Travel Agency",
      imgUrl: projImg8,
      url: "https://regal-uno.com.ng/"
    },
    {
      title: "Peach Financial",
      description: "Financial Services Company",
      imgUrl: projImg9,
      url: "https://peachfinancial.ng/"
    },
    {
      title: "Prototype NG",
      description: "Real Estate Company",
      imgUrl: projImg10,
      url: "https://prototype.ng/"
    },
    {
      title: "Wisdom Kwati Group",
      description: "Group of Companies",
      imgUrl: projImg11,
      url: "https://www.wisdomkwatigroup.com/"
    },
    {
      title: "Portfolio",
      description: "Portfolio Website",
      imgUrl: projImg12,
      url: "https://mayowabod-portfolio.onrender.com/"
    },
  ]

  const designs = [
    {
      imgUrl: design1,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design2,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design3,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design4,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design5,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design6,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design7,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design8,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design9,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design10,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design11,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design12,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design13,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design14,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design15,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design16,
      url: "https://savepouchafrica.com"
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""} >
                  <h2>Projects</h2>
                  <p>My experience with WordPress website development and management enables me to deliver fully customized, user-friendly, and scalable websites tailored to specific business needs.</p>
                </div>
              }
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Content Writing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Content Creation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Journalism Writing</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard 
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      designs.map((design, index) => {
                        return (
                          <ProjectCard2
                            key={index}
                            {...design}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      designs.map((design, index) => {
                        return (
                          <ProjectCard2
                            key={index}
                            {...design}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}