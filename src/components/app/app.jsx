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
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  // global
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  // ingredeint popup
  const ingredientDetails = useSelector((state) =>
    state.burgerConstructor.ingredientPopup.content ? state.burgerConstructor.ingredientPopup.content : null,
  );
  const isIngredientPopupOpen = useSelector((state) => state.burgerConstructor.ingredientPopup.isOpen);
  const closeIngredientPopup = () => {
    dispatch(burgerConstructorSlice.actions.closeIngredientPopup());
  };

  // order popup
  const orderDetails = {
    name: useSelector((state) => state.burgerConstructor.orderInfo?.name ?? "ERROR"),
    number: useSelector((state) => state.burgerConstructor.orderInfo?.number ?? "ERROR"),
  };
  const isOrderPopupOpen = useSelector((state) => state.burgerConstructor.orderPopup.isOpen);
  const closeOrderPopup = () => {
    dispatch(burgerConstructorSlice.actions.closeOrderPopup());
  };

  return (
    <>
      {isLoading && <LoadingIcon />}
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={`${appStyles.body}`}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>

      {isIngredientPopupOpen && (
        <Modal closeModal={closeIngredientPopup}>
          <IngredientDetails ingredientDetails={ingredientDetails} />
        </Modal>
      )}

      {isOrderPopupOpen && (
        <Modal closeModal={closeOrderPopup}>
          <OrderDetails name={orderDetails.name} id={orderDetails.number} />
        </Modal>
      )}
    </>
  );
}

export default App;
