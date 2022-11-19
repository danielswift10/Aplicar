import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import EmailContent from "../EmailContent/EmailContent";

const EmailOTP = () => {
    return ( 
        <div className="email-otp bg-gray-100 h-screen">
            <Header/>
            <main>
                <EmailContent/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default EmailOTP;