import Styles from '../CSS/header.module.css';
import Header from './Header';
import HeaderDown from './HeaderDown';
const PlaceOrder = () => {
    return (
        <div>
            <Header />
            <HeaderDown />
            <div className={Styles.row}>
                <div className={Styles.circle}>
                    <div className={Styles.child}>User</div>
                </div>
                <div style={{ 'marginLeft': '20px', 'marginTop': '10px' }}>
                    Customer
                    <div>Admin Doe</div>
                    <div>admin@example.com</div>
                </div>
                <div className={Styles.circle}>
                    <div className={Styles.child}>Cart</div>
                </div>
                <div style={{ 'marginLeft': '20px', 'marginTop': '10px' }}>
                Order info
                    <div>Shipping: Tanzania</div>
                    <div>Pay method: Paypal</div>
                </div>
                <div className={Styles.circle}>
                    <div className={Styles.child}>Location</div>
                </div>
                <div style={{ 'marginLeft': '20px', 'marginTop': '10px' }}>
                Deliver to
                    <div>Address: Arusha Tz,</div>
                    <div>Ngaramtoni Crater, P.O</div>
                    <div>BOX 1234 Arusha Tz</div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder;