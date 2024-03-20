import "../css/testimonials.css";
import Pic1 from "../assets/logo.png";

export default function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <h3>Testimonials</h3>
        <h1>What Clients Say</h1>
        <p>
          We place huge value on strong relationship and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right.
        </p>
        <div className="container-column">
          <div className="containers">
            <img src={Pic1} alt=""></img>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Hetal</h5>
            <h6>Pshycologist</h6>
          </div>
          <div className="containers">
            <img src={Pic1} alt=""></img>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Hetal</h5>
            <h6>Pshycologist</h6>
          </div>
          <div className="containers">
            <img src={Pic1} alt=""></img>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Hetal</h5>
            <h6>Pshycologist</h6>
          </div>
          <div className="containers">
            <img src={Pic1} alt=""></img>
            <p>
              Your empathetic approach made me feel understood and supported
              throughout the session. I appreciate your patience and kindness in
              addressing my concerns, even when they seemed trivial.
            </p>
            <h5>Hetal</h5>
            <h6>Pshycologist</h6>
          </div>
        </div>
      </section>
    </>
  );
}
