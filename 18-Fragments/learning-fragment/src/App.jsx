import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";


function App() {
  // let foodItems=[];
  let [foodItems , setFoodItems] = useState([
    // "Dal",
    //  "Green Vegitables",
    //  "Roti"
    ]);
                               
  

  
 const onKeyDown=(event)=>{

  if(event.key === 'Enter'){
    let newFoodItem = event.target.value;
    event.target.value="";
    
    let newItems=[...foodItems,newFoodItem];
    setFoodItems(newItems);
  }
   
  };
      return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      
      
      <Foodinput       handleKeyDown ={onKeyDown}></Foodinput>

      <ErrorMessage items={foodItems}></ErrorMessage> 
      <FoodItems items={foodItems}></FoodItems>

    </Container>
    
    </>
  );
}        
export default App;   