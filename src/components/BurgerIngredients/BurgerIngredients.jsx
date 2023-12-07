import React, { useEffect, useRef, useState } from "react";
import burgerIngredientsStyles from "./BurgerIngredients.module.css";
import IngredientsContainer from "../IngredientsContainer/IngredientsContainer";

const BurgerIngredients = () => {

  const [activeSection, setActiveSection ] =  useState('bun');

  const ingredientTypeAreaRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const getActiveSection = () => { // понимаю, что надо добавить offset, чтобы точнее переключали, нет времени на это. 
    const areaBottom = ingredientTypeAreaRef.current.getBoundingClientRect().bottom;
  
    const bunDistance = Math.abs(areaBottom - bunRef.current.getBoundingClientRect().top);
    const sauceDistance = Math.abs(areaBottom - sauceRef.current.getBoundingClientRect().top);
    const mainDistance = Math.abs(areaBottom - mainRef.current.getBoundingClientRect().top);
  
      if (bunDistance <= sauceDistance && bunDistance <= mainDistance) {
        setActiveSection('bun');
      } else if (sauceDistance <= bunDistance && sauceDistance <= mainDistance) {
        setActiveSection('sauce');
      } else {
        setActiveSection('main');
      }
  }

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <div className={`${burgerIngredientsStyles.burgerIngredients}  mr-10 mt-10`}>
      <h2 className={`text text_type_main-large`}>Соберите бургер</h2>
      <div ref={ingredientTypeAreaRef} className={`${burgerIngredientsStyles.ingredientTypeArea} mt-5 `}>
        <div className={`${burgerIngredientsStyles.buttonContainer} ${activeSection === 'bun' ? burgerIngredientsStyles.buttonContainer_active : ''}`}>
          <span className="text text_type_main-small">{"Булки"}</span>
        </div>
        <div className={`${burgerIngredientsStyles.buttonContainer} ${activeSection === 'sauce' ? burgerIngredientsStyles.buttonContainer_active : ''}`}>
          <span className='text text_type_main-small text_color_inactive'>{"Соусы"}</span>
        </div>
        <div className={`${burgerIngredientsStyles.buttonContainer} ${activeSection === 'main' ? burgerIngredientsStyles.buttonContainer_active : ''}`}>
          <span className="text text_type_main-small text_color_inactive">{"Начинки"}</span>
        </div>
      </div>

      <div onScroll={getActiveSection} className={`${burgerIngredientsStyles.ingredientTypes} ingredientTypes custom-scroll` }>
        <h3 ref={bunRef} className="text text_type_main-medium mt-10 mb-6">Булки</h3>
        <IngredientsContainer type="bun" />
        <h3 ref={sauceRef} className="text text_type_main-medium mt-10 mb-6">Соусы</h3>
        <IngredientsContainer type="sauce"  />
        <h3 ref={mainRef} className="text text_type_main-medium mt-10 mb-6">Начинки</h3>
        <IngredientsContainer type="main" />
      </div>
    </div>
  );
};

export default BurgerIngredients;