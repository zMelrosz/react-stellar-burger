import React, { useEffect } from "react";
import appStyles from "../app/app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { BURGER_API_URL, checkResponse, postData } from "../../utils/burger-api";
import { IngredientsContext } from "../../services/IngredientsContext";
import { TotalPriceContext } from "../../services/TotalPriceContext";

function App() {
  const [ingredients, setIngredients] = React.useState({
    all: [],
    chosen: [],
  });

  const totalPriceInitialState = { totalPrice: 0 };
  //const [isLoading, setLoading] = React.useState(true);
  const [ingredientPopup, setIngredientPopup] = React.useState({
    isOpen: false,
    content: null,
  });

  const openIngredientPopup = (clicked) => {
    console.log(clicked);

    setIngredientPopup({
      isOpen: true,
      content: <IngredientDetails ingredient={clicked} closePopup={closeIngredientPopup} />,
    });
  };

  const totalPriceReducer = (state, action) => {
    switch (action.type) {
      case "ADD_INGREDIENT":
        if (action.payload.type === "bun") {
          return {
            totalPrice: state.totalPrice + action.payload.price * 2,
          };
        } else {
          return {
            totalPrice: state.totalPrice + action.payload.price,
          };
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(totalPriceReducer, totalPriceInitialState);

  const closeIngredientPopup = () => {
    setIngredientPopup({
      ...ingredientPopup,
      isOpen: false,
    });
  };

  const [orderPopup, setOrderPopup] = React.useState({
    isOpen: false,
    content: null,
  });

  const openOrderPopup = (name, id) => {
    setOrderPopup({
      isOpen: true,
      content: <OrderDetails name={name} id={id} />,
    });
  };

  const orderSubmit = async () => {
    //setLoading(true);
    const order = {
      ingredients: ingredients.chosen.map((ingredient) => {
        return ingredient._id;
      }),
    };

    try {
      const response = await postData(`${BURGER_API_URL}/orders`, order);
      const data = await checkResponse(response);
      openOrderPopup(data.name, data.order.number);
    } catch (err) {
      console.log(err);
    } finally {
      //setLoading(false);
    }
  };

  const closeOrderPopup = () => {
    setOrderPopup({
      ...orderPopup,
      isOpen: false,
    });
  };

  return (
    <>
      <AppHeader />
      <main className={`${appStyles.body}`}>
            <BurgerIngredients />
            <BurgerConstructor onSubmitClick={orderSubmit} />
      </main>

      {ingredientPopup.isOpen && <Modal closeModal={closeIngredientPopup}>{ingredientPopup.content}</Modal>}

      {orderPopup.isOpen && <Modal closeModal={closeOrderPopup}>{orderPopup.content}</Modal>}
    </>
  );
}

export default App;
