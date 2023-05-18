import React from 'react';
import { useState } from 'react';

import items from "../data/data";
import styles from "../styles/Main.module.css";
import FilterMenu from './FilterMenu';
import Produkt from './Produkt';
const allcategory = ["ALLES", ...new Set(items.map(item => item.category))];
const Main = () => {

    const [data, setData] = useState(items);
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategory] = useState(allcategory);
    








    const filteritems = (category) => {
        if (category === "ALLES") {
            setData(items);
            return;
        }
        const filtering = items.filter((item) => item.category === category);
        setData(filtering);


    }


    return (
        <div className={styles.container}>
            <div className={styles.up}>
                <h1>unser Produkte</h1>
                <div className={styles.underline}></div>
            </div>
            <div>
                <FilterMenu filterprodukt={filteritems} allcategory={categories} />
            </div>
            <div className={styles.produkt}>
                {data.map((item, index) => <Produkt items={item} image={item.img} key={index} />)}
            </div>
        </div>
    );
};

export default Main;