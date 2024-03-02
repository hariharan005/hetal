import "../css/footer.css";
import { SocialIcon } from "react-social-icons";
export default function About() {
    return (
      <>
        <section className="footer">
          <div>
            <h3>Connect with Me</h3>
            <SocialIcon network="facebook"></SocialIcon>
            <SocialIcon network="instagram"></SocialIcon>
            <SocialIcon network="twitter"></SocialIcon>
            <SocialIcon network="email"></SocialIcon>
          </div>
        </section>
      </>
    );
  }
  