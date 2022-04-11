import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () =>{
const indiviualProduct=useSelector(state=>state);    
const {productid}=useParams();
const selectedValue=indiviualProduct.getAllProductRed.filter(value=>{return value._id==productid});
return <div>
    {
        selectedValue.map(givenValue=>{
            return (
                 <div key={givenValue._id}>
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