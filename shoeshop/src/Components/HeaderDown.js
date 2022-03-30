import { Link } from 'react-router-dom';
import styles from '../CSS/header.module.css';
const HeaderDown = () => {
    return (
        <div className={styles.headerdown}>
            <img alt="logo" src='/Images/logo.png'></img>
            <div>
            <input placeholder="search"></input>
            <button>Search</button>
            </div>
            <div>
            <select>
                <option>Hi, Admin Doe</option>
                <option>PROFILE</option>
                <option>LOGOUT</option>
            </select>
            <Link to='/cart'>
            <span>Cart</span>
            </Link>
            </div>
        </div>
    )
}

export default HeaderDown;