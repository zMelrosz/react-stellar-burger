import React from "react";
import appStyles from "../app/app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { BURGER_API_URL, checkResponse, getIngredients } from "../../utils/burger-api";
import { IngredientsContext } from "../../services/burgerConstructorContext"

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [ingredientPopup, setIngredientPopup] = React.useState({
    isOpen: false,
    content: null,
  });

  const openIngredientPopup = (clicked) => {
    console.log(clicked);

    setIngredientPopup({
      isOpen: true,
      content: (
        <IngredientDetails ingredient={clicked} closePopup={closeIngredientPopup} />
      ),
    });
  };

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

  const openOrderPopup = () => {
    setOrderPopup({
      isOpen: true,
      content: <OrderDetails closePopup={closeOrderPopup} />,
    });
  };

  const closeOrderPopup = () => {
    setOrderPopup({
      ...orderPopup,
      isOpen: false,
    });
  };

  React.useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      const url = `${BURGER_API_URL}/ingredients`;
      try {
        const response = await fetch(url);
        const data = await checkResponse(response);
        setIngredients(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchIngredients();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppHeader />

      <section className={`${appStyles.body}`}>
        <BurgerIngredients ingredients={ingredients} onIngredientClick={openIngredientPopup} />
        <BurgerConstructor ingredients={ingredients} onSubmitClick={openOrderPopup} />
      </section>

      {ingredientPopup.isOpen && (
        <Modal closeModal={closeIngredientPopup}>{ingredientPopup.content}</Modal>
      )}
      {orderPopup.isOpen && (
        <Modal closeModal={closeOrderPopup}>{orderPopup.content}</Modal>
      )}
    </>
  );
}

export default App;