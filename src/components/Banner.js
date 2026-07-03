import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Content Writer", "Content Strategist", "Product Manager"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect (() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__slideInLeft" : ""} >
                  <span className="tagline">Hi, welcome to my portfolio</span>
                  <h1>{`I'm Fortune Ameachi `}<span className="wrap">{ text }</span></h1>
                  <p>A results-driven Content Strategist and Product & Sales Manager with over six years of experience developing structured content systems, positioning products, and supporting business growth. Skilled in aligning brand messaging with market needs to improve visibility, engagement, and overall business performance. Experienced in managing digital presence, building strategic content frameworks, and supporting product and sales operations through clear communication and customer-focused execution.</p>
                  {/* <button onClick={() => console.log('connect')}>Download My CV <ArrowRightCircle size={25} /></button> */}
                  <a href="\fortune-ameachi-cv.pdf" download style={{ textDecoration: "none" }}>
                    <button>Download My CV  <ArrowRightCircle size={25} /></button>
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__slideInRight" : ""} >
                  <img src={headerImg} alt="Header Image" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}