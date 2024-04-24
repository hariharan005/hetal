import Payimg from "../assets/Payment.jpeg"
import "../css/payment.css"
import Header from "../components/header"

export default function Payment() {
    return(
        <>
        <Header />
        <main>
            <div className="payment-container">
                <img src={Payimg}></img>
            </div>
        </main>
        </>
    );
}