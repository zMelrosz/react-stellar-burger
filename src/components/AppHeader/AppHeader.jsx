import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";

const AppHeader = () => {
  return(
    <div className={headerStyles.header}>
          <div className={headerStyles.container}>
            <a 
              className={`${headerStyles.navBlock} ${headerStyles.navBlockWhite} text text_type_main-small pl-5 pr-5 mr-2 mb-4 mt-4` } href="#"
            >
              <BurgerIcon />
              Конструктор
            </a>
            <a className={`${headerStyles.navBlock} text text_type_main-small pl-5 pr-5 mb-4 mt-4`} href="#">
              <ListIcon type="secondary" />
              Лента заказов
            </a>
          </div>
          <div className={headerStyles.logo}><Logo /></div>
          <a className={`${headerStyles.navBlock} text text_type_main-small pl-5 pr-5 mb-4 mt-4`} href="#">
            <ProfileIcon type="secondary" />
            Личный кабинет
          </a>
        </div>
  )
}

export default AppHeader;