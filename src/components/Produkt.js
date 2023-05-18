import React from 'react';

import styles from "../styles/Main.module.css";

const Produkt = ({ items , image }) => {
    const {title,price,desc} = items;
    
    return (
        <div className={styles.produktbox}>
            <div>
                <img src={image} alt='im'/>
            </div>
            <div className={styles.pricetitle}><span>{price}</span> <p>{title}</p></div>

            <div className={styles.desc}><p>{desc}</p></div>

        </div>

    );
};

export default Produkt;