import React from "react";
import appStyles from "../app/app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { burgerConstructorSlice } from "../../services/store";
import { usePostOrderMutation } from "../../services/api";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

function App() {

  // global
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  // ingredeint popup
  const ingredientDetails = useSelector(state => state.burgerConstructor.ingredientPopup.content ? state.burgerConstructor.ingredientPopup.content : null );
  const isIngredientPopupOpen = useSelector(state => state.burgerConstructor.ingredientPopup.isOpen);
  const closeIngredientPopup = () => {
    dispatch(burgerConstructorSlice.actions.closeIngredientPopup());
  };

  // order popup
  const orderDetails = {
    name: useSelector(state => state.burgerConstructor.orderInfo?.name ?? 'ERROR'),
    number: useSelector(state => state.burgerConstructor.orderInfo?.number ?? 'ERROR'),
  }
  const isOrderPopupOpen = useSelector(state => state.burgerConstructor.orderPopup.isOpen);
  const closeOrderPopup = () => {
    dispatch(burgerConstructorSlice.actions.closeOrderPopup())
  }

/*   const orderSubmit = async () => {
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
  }; */ 


  return (
    <>
      {isLoading && <LoadingIcon />}
      <AppHeader />
      <main className={`${appStyles.body}`}>
            <BurgerIngredients />
            <BurgerConstructor /* onSubmitClick={orderSubmit} */ />
      </main>

      {isIngredientPopupOpen && <Modal closeModal={closeIngredientPopup}><IngredientDetails ingredientDetails={ingredientDetails} /></Modal>}

      {isOrderPopupOpen && <Modal closeModal={closeOrderPopup}><OrderDetails name={orderDetails.name} id={orderDetails.number} /></Modal>}
    </>
  );
}

export default App;