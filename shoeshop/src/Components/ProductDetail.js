import { useState } from "react";
import { useParams } from "react-router-dom";
import data from '../Data/productData';

const ProductDetail = () => {
    const { productid } = useParams();
    const selectedValue = data.filter(value => { return value._id == productid });
    const [valueSelected,setValueSelected]=useState("select");
    const [comment,setComment]=useState("");
    const dataSubmit =()=>{
      console.log(`Rating:${valueSelected}`,`Comment:${comment}`)
    }


    return <div>
        {
            selectedValue.map(givenValue => {
                return (
                    <div key={givenValue._id}>
                        <img alt='connection issue' src={givenValue.image}></img>
                        <div>{givenValue.name}</div>
                        <div>{givenValue.description}</div>
                        <div>
                            WRITE A CUSTOMER REVIEW
                        </div>
                        <div>
                            Rating
                        </div>
                        <div>
                            <select onChange={(e)=> setValueSelected(e.target.value)}>
                                <option value="select">select</option>
                                <option value="1 - Poor">1 - Poor</option>
                                <option value="2 - Fair">2 - Fair</option>
                                <option value="3 - Good">3 - Good</option>
                                <option value="4 - Very Good">4 - Very Good</option>
                                <option value="5 - Excellent">5 - Excellent</option>
                            </select>
                        </div>
                        <div>
                            Comment
                        </div>
                        <div>
                            <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
                        </div>
                        <button type="submit" onClick={dataSubmit}>SUBMIT</button>
                    </div>
                )
            })
        }
    </div>
}

export default ProductDetail;