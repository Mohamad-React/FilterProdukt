import React from 'react';
import Button from '@mui/material/Button';
import styles from "../styles/Main.module.css";
const FilterMenu = ({allcategory , filterprodukt }) => {
    return (
        <div className={styles.filterbutton}>
            
                  {allcategory.map((category,index)=>{
                    return (<Button variant="outlined" key={index} size="small" onClick={() => filterprodukt(category)}>
                    {category}
                </Button>)
                  })}
             
        </div>
    );
};

export default FilterMenu;