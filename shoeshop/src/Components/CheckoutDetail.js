import Header from "./Header";
import HeaderDown from "./HeaderDown";
const CheckoutDetail=()=>{
return (
    <div>
        <Header/>
        <HeaderDown/>
        DELIVERY ADDRESS
        <form>
            <input placeholder="Enter Address"></input>
            <input placeholder="Enter City"></input>
            <input placeholder="Enter Postal code"></input>
            <input placeholder="Enter Country"></input>
            <button>CONTINUE</button>
        </form>
    </div>
)
}
export default CheckoutDetail;