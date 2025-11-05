import styles from "./item.module.css";

const Item = ({FoodItem ,bought ,handleBuyButton}) => {
  
  return (
    <>
      <li className={`${styles["kg-item"]}   list-group-item ${bought && "active"}`}>
          <span className={styles["kg-span"]}>{FoodItem}</span>
          <button className={`${styles.button}  btn btn-info`}
           
          onClick={handleBuyButton}
          >Buy</button>

          
      </li>
    </>
  )
};
 
export default Item;

