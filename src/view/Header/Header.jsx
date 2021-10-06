import React from 'react';
import style from './Header.module.scss';
import Logo from "@assets/Header/Grapheme.logo.png"

const Header = () => {
    return (
        <div className={style.main}>
            <div>
                <h1>
                    Тестовое задание
                </h1>
            </div>
            <div>
                <img src={Logo} alt="logo"/>
            </div>
        </div>
    );
};

export default Header;
