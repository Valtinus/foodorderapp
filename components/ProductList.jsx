import React from 'react';
import styles from "../styles/ProductList.module.css";
import PizzaCard from './PizzaCard';

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The best pizza you'll ever eat!</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla qui, laborum voluptatum incidunt reiciendis tenetur. Modi fugiat aspernatur sed excepturi tempore quas quisquam quo, dolor cupiditate et? Nesciunt, quasi eligendi.</p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  );
};

export default ProductList;
