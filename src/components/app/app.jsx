import React from "react";
import appStyles from "../app/app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

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
      content: null
    });
  }

  const openModal = (ingredient) => {
    console.log(ingredient);
    const content = (
      <IngredientDetails
        calories={ingredient.calories}
        proteins={ingredient.proteins}
        fats={ingredient.fat}
        carbs={ingredient.carbohydrates}
        imageLarge={ingredient.image_large}
        closePopup={closeModal}
      />
    );
    setModalState({
      isOpen: true,
      content: content,
    });
  }  

  React.useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      const url = "https://norma.nomoreparties.space/api/ingredients";
      try {
        const responce = await fetch(url);
        const ingredients = await responce.json();
        setIngredients(ingredients.data);
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
        <BurgerConstructor ingredients={ingredients} />
      </section>
      <Modal isOpen={modalState.isOpen} content={modalState.content} />
    </>
  );
}

export default App;
