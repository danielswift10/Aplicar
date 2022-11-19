
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ForgotPasswordContent from "./ForgotPasswordContent";

const ForgotPassword = () => {
    return ( 
        <div className="forgot-password">
            <Header/>            
            <main>
                <ForgotPasswordContent/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default ForgotPassword;