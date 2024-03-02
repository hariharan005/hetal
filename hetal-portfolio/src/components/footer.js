import "../css/footer.css";
import { SocialIcon } from "react-social-icons";
export default function About() {
  return (
    <>
      <section className="footer">
        <div className="footerdetails">
          <h5>Company</h5>
          <h5>Services</h5>
          <h5>Resources</h5>
        </div>
        <div className="socialicon">
          <h3>Connect with Me</h3>
          <SocialIcon className="icon" network="facebook"></SocialIcon>
          <SocialIcon className="icon" network="instagram"></SocialIcon>
          <SocialIcon className="icon" network="twitter"></SocialIcon>
          <SocialIcon className="icon" network="email"></SocialIcon>
        </div>
        <div className="horizontal"></div>
        <div className="round1"></div>
        <div className="round2-blur"></div>
        <div className="round3space"></div>
        <div className="round40ffspace"></div>
        <div className="rights">
          <h5>&copy; 2024 All rights reserved</h5>
        </div>
      </section>
    </>
  );
}
