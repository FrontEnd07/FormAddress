import React from 'react';
import style from "./Order.module.scss";
import {Crum, Address, Pay} from './index';
import {useSelector} from "react-redux"
import Success from '@assets/Pay/verified.png';

const Order = () => {

    let {addressValid} = useSelector(state => state.address)
    let {payValid} = useSelector(state => state.pay)

    return (
        <div className={style.main}>
            <div className={style.crum}>
                <Crum/>
            </div>
            <div className={style.form}>
                {!addressValid ? <Address/> : <>
                    {!payValid ?
                        <Pay/>
                        : <div className={style.success}>
                            <img src={Success} alt="Thank you"/>
                            <span>Спасибо!</span>
                        </div>}
                </>}
            </div>
        </div>
    );
};

export default Order;
