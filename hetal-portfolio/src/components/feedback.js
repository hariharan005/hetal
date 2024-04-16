import { useEffect } from "react";
import Header from "../components/header";

export default function Blogs() {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = "Feedback";
  }, []);
  return (
    <>
      <Header />
      <section id="feedback">
        <iframe
          title="feedback-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSclGJLTbpAcGtpn8U_SMRvDFGbCa1M729GMWCDCX7ua6c8jxw/viewform?embedded=true"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          overfl
        >
          Loading…
        </iframe>
      </section>
    </>
  );
}
