import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";

export default class AppHeader extends React.Component {
  render() {
    return (
      <>
        <div className={headerStyles.header}>
          <div className={headerStyles.container}>
            <nav 
              className={`${headerStyles.navBlock} text text_type_main-small pl-5 pr-5 mr-2 mb-4 mt-4`}
            >
              <BurgerIcon />
              Конструктор
            </nav>
            <nav className={`${headerStyles.navBlock} text text_type_main-small pl-5 pr-5 mb-4 mt-4`}>
              <ListIcon type="secondary" />
              Лента заказов
            </nav>
          </div>
          <div className={headerStyles.logo}><Logo /></div>
          <nav className={`${headerStyles.navBlock} text text_type_main-small pl-5 pr-5 mb-4 mt-4`}>
            <ProfileIcon type="secondary" />
            Личный кабинет
          </nav>
        </div>
      </>
    );
  }
}