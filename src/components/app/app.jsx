import appStyles from '../app/app.module.css'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { data } from '../../utils/data';


function App() {
  return (
    <>
      <AppHeader />
      <section className={`${appStyles.body}`}>
        <BurgerIngredients />
        <BurgerConstructor data={data} />
      </section>
    </>
  );
}

export default App;