import React from 'react';
import style from './Layout.module.scss'

export const CardForm = ({name, children, appClassName}) => {
    return (
        <div className={`${style.main} ${appClassName ? appClassName : ""}`}>
            <p>{name}</p>
            {children}
        </div>
    );
};

