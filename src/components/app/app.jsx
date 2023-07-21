import React from "react";
import appStyles from '../app/app.module.css'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import Modal from "../Modal/Modal";


function App() {

  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      const url = 'https://norma.nomoreparties.space/api/ingredients';
      try {
        const responce = await fetch(url);
        const ingredients = await responce.json();
        setIngredients(ingredients.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
      
    }
    fetchIngredients();
  }, []);

  if (isLoading) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <>
      <AppHeader />
      <section className={`${appStyles.body}`}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </section>
      <Modal />
    </>
  );
}

export default App;