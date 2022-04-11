import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../CSS/header.module.css';
import productData from '../Data/productData';
import {getProduct} from '../redux/actions/actions'
const ProductDisplay = () => {
    const allProduct=useSelector(state=>state);
    console.log(allProduct);
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(getProduct(productData));
    },[])
    return (
        <div className={`${styles.wrapproducts} ${styles.headerdown}`}>
            {allProduct.getAllProductRed.map(products => {
                return <div key={products._id} className={styles.borderCreation}>
                    <Link to={`products/${products._id}`} style={{'color':'black', 'textDecoration':'none'}}>
                        {<img alt="product" src={products.image} className={styles.imgsize}></img>}
                        <div className={styles.borderdetails}>
                            <div>{products.name}</div>
                        </div>
                    </Link>
                    <div>
                        <div>{products.rating}</div>
                        <div>{products.price}</div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ProductDisplay;