import { Fragment, useState } from "react";
import Header from "./Header";
import HeaderDown from "./HeaderDown";
import styles from '../CSS/header.module.css';
const CheckoutDetail = () => {
    const [values, setValue] = useState({
        Address: '',
        City: '',
        Postal: '',
        Country: '',
        isError: false,
        errorMessage: {
            addressError: '',
            cityError: '',
            postalError: '',
            countryError: ''
        }
    });
    const formHandle = (e) => {
        e.preventDefault();
        //debugger;
        if (values.Address === "" || values.City === "" || values.Postal === "" || values.Country === "") {
            setValue({
                ...values,
                isError: true,
                errorMessage: {
                    addressError: (values.Address === "" ? 'Please Enter Address' : ''),
                    cityError: (values.City === "" ? 'Please Enter City' : ''),
                    postalError: (values.Postal === "" ? 'Please Enter Postal Address' : ''),
                    countryError: (values.Country === "" ? 'Please Enter Country' : '')
                }
            })
        }
        else {
            console.log(values);
        }
    }
    const settingValue = (e) => {
        //debugger;
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <Header />
            <HeaderDown />
            DELIVERY ADDRESS
            <form onSubmit={formHandle}>
                <input placeholder="Enter Address" name="Address" value={values.Address} onChange={settingValue} />
                {(values.isError && values.Address === '') ? <span className={styles.errorMessage}>{values.errorMessage.addressError}</span> : null}

                <input placeholder="Enter City" name="City" value={values.City} onChange={settingValue} />
                {(values.isError && values.City === '') ? <span className={styles.errorMessage}>{values.errorMessage.cityError}</span> : null}

                <input placeholder="Enter Postal code" name="Postal" value={values.Postal} onChange={settingValue} />
                {(values.isError && values.Postal === '') ? <span className={styles.errorMessage}>{values.errorMessage.postalError}</span> : null}

                <input placeholder="Enter Country" name="Country" value={values.Country} onChange={settingValue} />
                {(values.isError && values.Country === '') ? <span className={styles.errorMessage}>{values.errorMessage.countryError}</span> : null}

                <button>CONTINUE</button>
            </form>
        </div>
    )
}
export default CheckoutDetail;