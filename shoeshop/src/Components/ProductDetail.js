import { useParams } from "react-router-dom";
import data from '../Data/productData';

const ProductDetail = () =>{
const {productid}=useParams();
const selectedValue=data.filter(value=>{return value._id==productid});
return <div>
    {
        selectedValue.map(givenValue=>{
            return (
                 <div>
                 <img alt='connection issue' src={givenValue.image}></img>
                 <div>{givenValue.name}</div>
                 <div>{givenValue.description}</div>
                 </div>
                )
        })    
    }
</div>
}

export default ProductDetail;