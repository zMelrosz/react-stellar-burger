import appStyles from '../app/app.module.css'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { data } from '../../utils/data';


function App() {
  return (
    <>
      <AppHeader />
      <body className={`${appStyles.body}`}>
        <BurgerIngredients />
        <BurgerConstructor data={data} />
      </body>
    </>
  );
}

export default App;
