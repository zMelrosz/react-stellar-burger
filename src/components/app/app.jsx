import React from "react";
import appStyles from "../app/app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [modalState, setModalState] = React.useState({
    isOpen: false,
    content: null,
  });

  const closeModal = () => {
    setModalState({
      isOpen: false,
      content: null,
    });
  };
  
  const openModal = (clicked) => {
    if (clicked.type === "bun" || clicked.type === "sauce" || clicked.type === "main") {
      setModalState({
        isOpen: true,
        content: <IngredientDetails ingredient={clicked} closePopup={closeModal} />
      });
    } else {
      setModalState({
        isOpen: true,
        content: <OrderDetails closePopup={closeModal} />
      });
    }
  };

  React.useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      const url = "https://norma.nomoreparties.space/api/ingredients";
      try {
        const response = await fetch(url);
        const data = await response.json();
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
        <BurgerIngredients ingredients={ingredients} onIngredientClick={openModal} />
        <BurgerConstructor ingredients={ingredients} onSubmitClick={openModal} />
      </section>
      {modalState.isOpen && (
        <Modal closeModal={closeModal}>
          {modalState.content}
        </Modal>
      )}
    </>
  );
}

export default App;
