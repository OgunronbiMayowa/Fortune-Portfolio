import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import { ProjectCard3 } from "./ProjectCard3";
import projImg1 from "../assets/img/content-writing1.png";
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
import projImg13 from "../assets/img/web12.jpg";
import projImg14 from "../assets/img/web12.jpg";
import theNations from "../assets/img/the-nations.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [ // Content Writing Projects
    {
      // title: "Novarick Homes",
      description: "Ideas To Consider In Transforming Your Sydney Federation House",
      imgUrl: projImg1,
      url: "https://docs.google.com/document/d/1hxrwDiWdBPqOBtEcVfz2xPFnLinrkSpIxmL-siTcI3k/edit?usp=drivesdk"
    },
    {
      // title: "Under 40 Landlord",
      description: "Rebrand Your Sydney Home with Expert House Painting and Exterior Ideas",
      imgUrl: projImg2,
      url: "https://docs.google.com/document/d/1-D21KOKZ6WbjiC8qK3DyEajPr47LS7sI4AF_nJn2K5M/edit?usp=drivesdk"
    },
    {
      // title: "Disability Focus Africa",
      description: "Best Dry Cleaning and Laundry Service in Jumeirah Islands with Pickup and Delivery",
      imgUrl: projImg3,
      url: "https://docs.google.com/document/d/1xqjBMkivnJhx8NhNg2USF499N9IaJHdVWKGcx0xGPtU/edit?usp=drivesdk"
    },
    {
      // title: "Regent",
      description: "Overcoming Addiction",
      imgUrl: projImg4,
      url: "https://docs.google.com/document/d/1P9GmqRxdoeQg0JZlaBs9kK6c0t3GCukKFd2ufE4MJ1A/edit?usp=drivesdk"
    },
    {
      // title: "Manheim Automobile",
      description: "Premium Glass and Aluminium Solutions for Modern Spaces",
      imgUrl: projImg5,
      url: "https://docs.google.com/document/d/1A7riMG0XdKzZT64tYBkyYnHlWFI9GKSnIM4VoiMUNQc/edit?usp=drivesdk"
    },
    {
      // title: "FOG MSL",
      description: "Eco-Friendly Dry Cleaning Service in Jumeirah, Dubai With Fast Delivery Service",
      imgUrl: projImg6,
      url: "https://docs.google.com/document/d/1OdoX0W30PxW3DebC6k-jIGjL0a6jSjnuyeafbYSVh-M/edit?usp=drivesdk"
    },
    {
      // title: "Sellerrand",
      description: "Why Your Body Needs Exercise and Fitness",
      imgUrl: projImg7,
      url: "https://docs.google.com/document/d/1joXuEHi1xzgbHTNWBCaNv9Y4RoZ8-B2IseOVeXM9KHY/edit?usp=drivesdk"
    }
  ]

    const projects2 = [ // Content Creation Projects
    {
      // title: "Novarick Homes",
      description: "Where Creativity Meets Strategy",
      imgUrl: projImg8,
      url: "https://vt.tiktok.com/ZSCXpRMGc/"
    },
    {
      // title: "Under 40 Landlord",
      description: "Where Creativity Meets Strategy",
      imgUrl: projImg8,
      url: "https://vt.tiktok.com/ZSCXpRMGc/"
    },
    {
      // title: "Disability Focus Africa",
      description: "Content That Captivates",
      imgUrl: projImg10,
      url: "https://vt.tiktok.com/ZSCXsd8KE/"
    },
    {
      // title: "Regent",
      description: "Video Content That Performs",
      imgUrl: projImg11,
      url: "https://www.instagram.com/reel/DZEuuD_tyrp/?igsh=MW03N2lvdDFzdms5Zw=="
    },
    {
      // title: "Manheim Automobile",
      description: "Content That Captivates",
      imgUrl: projImg12,
      url: "https://vt.tiktok.com/ZSCXpTuE2/"
    },
    {
      // title: "FOG MSL",
      description: "Where Creativity Meets Strategy",
      imgUrl: projImg13,
      url: "https://www.instagram.com/reel/DV0FReItSii/?igsh=aHhwOW5obmVwNmFt"
    },
    {
      // title: "Sellerrand",
      description: "Video Content That Performs",
      imgUrl: projImg14,
      url: "https://vt.tiktok.com/ZSCXsUMYg/"
    }
  ]

    const projects3 = [ // Journalism Writing Projects
    {
      // title: "Novarick Homes",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/our-2021-expectations/"
    },
    {
      // title: "Under 40 Landlord",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/our-losses-gains-in-2020/"
    },
    {
      // title: "Disability Focus Africa",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/absu-vc-urges-unions-to-suspend-strike-2/"
    },
    {
      // title: "Regent",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/students-and-night-classes/"
    },
    {
      // title: "Manheim Automobile",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/our-2021-expectations/"
    },
    {
      // title: "FOG MSL",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/our-losses-gains-in-2020/"
    },
    {
      // title: "Sellerrand",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/nans-a-divided-house/"
    },
    {
      // title: "Regal Uno",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/absu-vc-urges-unions-to-suspend-strike/"
    },
    {
      // title: "Peach Financial",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/absu-suspend-strike-union-urges-asuu/"
    },
    {
      // title: "Prototype NG",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/student-couples-on-campuses/"
    },
    {
      // title: "Wisdom Kwati Group",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/youths-and-social-vices/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/youths-and-laziness/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/row-over-fare-hike/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/absu-row-over-pocket-money/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/tackling-drug-abuse-among-students/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/getting-equipped-for-higher-education/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/tackling-drug-abuse-among-students/"
    },
    {
      // title: "Portfolio",
      description: "The Nations Newspaper",
      imgUrl: theNations,
      url: "https://thenationonlineng.net/is-uniform-way-out-of-indecent-dressing-on-campus/"
    },

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
                  <p>My experience in content strategy, social media management, and product management enables me to develop audience-focused campaigns, create compelling content, and deliver strategic solutions that drive engagement, strengthen brand identity, and support business growth.</p>
                </div>
              }
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Content Writing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Video Content</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Journalism Writing</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects1.map((project, index) => {
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
                      projects2.map((project2, index) => {
                        return (
                          <ProjectCard2
                            key={index}
                            {...project2}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      projects3.map((project3, index) => {
                        return (
                          <ProjectCard3
                            key={index}
                            {...project3}
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