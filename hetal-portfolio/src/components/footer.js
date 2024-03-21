import "../css/footer.css";
import { SocialIcon } from "react-social-icons";
export default function About() {
  return (
    <>
      <section className="footer">
        <div className="footerdetails-links">
          <ul>
            <li>
              <a href="https://facebook.com">Company</a>
              <a href="https://facebook.com">Services</a>
              <a href="https://facebook.com">Resources</a>
              <a href="https://facebook.com">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="socialicon">
          <h3>Connect with Me</h3>
          <SocialIcon
            className="icon"
            url="https://facebook.com"
            network="facebook"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            className="icon"
            url="https://instagram.com"
            network="instagram"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            className="icon"
            url="https://twitter.com"
            network="twitter"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            className="icon"
            url="https://mail.google.com"
            network="email"
            target="_blank"
          ></SocialIcon>
        </div>
        <div className="horizontal"></div>
        <div className="round1"></div>
        <div className="round2-blur"></div>
        <div className="round3space"></div>
        <div className="round40ffspace"></div>
        <div className="rights">
          <p id="copyrights">&copy; 2024 All rights reserved</p>
          <a
            href="https://hariharanchellamuthu.me"
            id="developedby"
            target="_blank" rel="noreferrer"
          >
            Developed by: Hariharan C
          </a>
        </div>
      </section>
    </>
  );
}
