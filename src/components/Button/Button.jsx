import React from 'react';
import style from './Button.module.scss';

export const Button = ({children, appClassName, ...props}) => <button
    className={`
            ${style.button} 
            ${props.disable ? style.disable : ''} 
            ${appClassName ? appClassName : ""}`
    }
    {...props}
    >
    {children}
</button>



