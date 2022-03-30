import {Fragment} from 'react';
import styles from '../CSS/header.module.css';
import productData from '../Data/productData';
const ProductDisplay = () => {
    return (
        <div className={`${styles.wrapproducts} ${styles.headerdown}`}>
            {productData.map(products => {
                return <div key={products._id} className={styles.borderCreation}>
                    {<img alt="product" src={products.image} className={styles.imgsize}></img>}
                    <div className={styles.borderdetails}>
                    <div>{products.name}</div>
                    <div>{products.rating}</div>
                    <div>{products.price}</div> 
                    </div>
                </div>
            })}
        </div>
    )
}

export default ProductDisplay;