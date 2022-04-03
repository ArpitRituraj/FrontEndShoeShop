import Header from "./Header";
import HeaderDown from "./HeaderDown";
import styles from '../CSS/header.module.css';
import { useNavigate } from "react-router-dom";
const Payment = () => {
    const navigator=useNavigate();
    const formContinue=()=>{
     navigator('/placeorder');
    }
    return (
        <div>
            <Header />
            <HeaderDown />
            <div className={`${styles.headerdata} ${styles.formalign}`}>
                <form onSubmit={formContinue}>
                    SELECT PAYMENT METHOD <br/>
                    <input type='radio' value='Paypal or Credit Card' />Paypal or Credit Card
                    <button>CONTINUE</button>
                </form>
            </div>
        </div>
    )
}

export default Payment;