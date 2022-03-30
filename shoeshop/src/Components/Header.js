import styles from "../CSS/header.module.css";
const Header = () => {
    return (
        <div className={styles.headerdata}>
            <div className={styles.headerdata}>
            <div style={{ 'margin-left': '104.5px', 'margin-right': '96px' }}>
                +255 768 356 890
            </div>
            <div>
                info@zpunet.com
            </div>
            </div>
            <div className={styles.headerright}>
            <span className={styles.headerrightelement}>
                facebook
            </span>
            <span className={styles.headerrightelement}>
                instagram
            </span>
            <span className={styles.headerrightelement}>
                linkedin
            </span>
            <span className={styles.headerrightelement}>
                youtube
            </span>
            <span>
                pinInterest
            </span>
            </div>
        </div>
    )
}

export default Header;