import React from 'react';
import style from './Crum.module.scss';
import {useSelector} from 'react-redux'

const Crum = () => {
    let {addressValid} = useSelector(state => state.address)

    return (
        <div className={style.main}>
            {["Доставка", "Оплата"].map((el,i) => (
                <div key={i}>
                    <span className={`${(el === "Доставка" && !addressValid) ? style.active : addressValid ? style.active : ""}`}>{el}</span>
                </div>
            ))}
        </div>
    );
};

export default Crum;
