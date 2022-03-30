import { useState } from "react";
import Header from "./Header";
import HeaderDown from "./HeaderDown";
const Login=()=>{
const [price,totalPrice]=useState(456);

    return(
        <div>
            <Header />
            <HeaderDown />
            <div>
              Total Cart Products (4)
              </div>
              <div>
                  <img alt='Image' src="/images/2.png"></img>
                  <span>Nike Girl Shoe</span>
                  <span> Quantity
                      <select onChange={(e)=>totalPrice((e.target.value)* price)}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                      </select>
                  </span>
                  <span>SUBTOTAL : ${price}</span>
              </div>
        </div>
    )
}

export default Login;