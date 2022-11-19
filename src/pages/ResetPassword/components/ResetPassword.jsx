import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ResetPasswordContent from "./ResetPasswordContent";

const ResetPassword = () => {
    return ( 
        <div className="reset-password">
            <Header/>
            <main>
                <ResetPasswordContent/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default ResetPassword;