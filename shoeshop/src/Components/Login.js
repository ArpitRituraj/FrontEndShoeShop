import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeaderDown from "./HeaderDown";
import { myContext } from "../App";
const Login=()=>{
const item=useContext(myContext);
    return(
        <div>
            <Header />
            <HeaderDown />
            <div>
              Total Cart Products (4)
              </div>
              <div>
                  <img alt='Image' src={item.image}></img>
                  <span>{item.productName}</span>
                  <span> Quantity
                      <select onChange={(e)=>item.priceChanged((e.target.value)* 456)}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                      </select>
                  </span>
                  <span>SUBTOTAL : ${item.productPrice}</span>
                  <Link to='/'>
                  <button>CONTINUE TO SHOPPING</button>
                  </Link>
                  <Link to='/checkoutpage'>
                  <button>CHECKOUT</button>
                  </Link>
              </div>
        </div>
    )
}

export default Login;