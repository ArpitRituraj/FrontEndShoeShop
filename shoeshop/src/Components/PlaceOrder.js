import Styles from '../CSS/header.module.css';
import Header from './Header';
import HeaderDown from './HeaderDown';
import { myContext } from '../App';
import { useContext, useEffect, useRef, useState } from 'react';
const PlaceOrder = () => {
    const item=useContext(myContext);
    const shippingCharge=useRef(123);
    const [tax,setTax]=useState(0.00);
    
    useEffect(()=>{
      setTax(parseFloat((item.productPrice)*0.18).toFixed(2))
    },[item.productPrice])
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
            <div className='product-cart'>
                <img alt='No Image' src={item.image}></img>
                {item.productName}
                QUANTITY : 1 
                SUBTOTAL : {item.productPrice +shippingCharge.current + parseFloat(tax)}
                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <td>Products</td>
                            <td>${item.productPrice}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>${shippingCharge.current}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>${tax}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{item.productPrice +shippingCharge.current + parseFloat(tax)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlaceOrder;