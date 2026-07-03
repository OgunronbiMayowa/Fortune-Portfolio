import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/ify6.jpeg";
import LinkedInIcon from "../assets/img/linkedIn.svg";
import FacebookIcon from "../assets/img/facebook-icon.svg";
import InstagramIcon from "../assets/img/instagram-icon.svg";
import WhatsaAppIcon from "../assets/img/whatsapp-icon.png";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
             <img id="footer-logo" src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
               <a href="https://wa.me/qr/V2HSDBRV3DEMP1"><img src={WhatsaAppIcon} alt="WhatsaApp" /></a>
                <a href="https://www.facebook.com/share/1BMDDZWvwn/"><img src={FacebookIcon} alt="Facebook" /></a>
                <a href="https://www.linkedin.com/in/fortune-amaechi-1a16962b9?utm_source=share_via&utm_content=profile&utm_medium=member_android"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/forteo_xx?igsh=MWo2dTNiaXhqeHZibQ=="><img src={InstagramIcon} alt="Instagram" /></a>
            </div>
            <p>Copyright &copy; 2026 All rights Reserved | Fortune Ifeoma Amaechi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}