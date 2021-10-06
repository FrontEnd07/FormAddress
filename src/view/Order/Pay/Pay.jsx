import React from 'react';
import style from "./Pay.module.scss";
import {CardForm} from "@components/Layout"
import {LFeild} from "@components/Form";
import {Button} from "@components/Button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {payValidAC} from "@store/reducers/Order/pay"
import {useDispatch} from "react-redux";


const schema = yup.object().shape({
    nameCard: yup.string().required("empty"),
    numberCard: yup.string().required("empty"),
    term: yup.string().required("empty"),
    cvv: yup.string().required("empty"),
});

const Pay = () => {

    const dispatch = useDispatch();

    const {
        register,
        formState: {errors},
        handleSubmit,
        setValue,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const hendlersSubmit = (data) => {
        dispatch(payValidAC(true))
    }

    return (
        <div className={style.main}>
            <div className={style.title}>
                <h1>Информация для доставки</h1>
            </div>
            <div className={style.form}>
                <CardForm name="Имя на карте">
                    <LFeild
                        name="nameCard"
                        type="text"
                        placeholder="Konstantin Ivanov"
                        register={register}
                        errors={errors}
                    />
                </CardForm>
                <CardForm name="Номер карты">
                    <LFeild
                        name="numberCard"
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        maxLength="19"
                        register={register}
                        errors={errors}
                        onChange={e => {
                            setValue('numberCard', e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim(), {shouldValidate: true})
                            e.target.value = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
                        }}
                    />
                </CardForm>
                <div>
                    <CardForm name="Срок">
                        <LFeild
                            name="term"
                            type="text"
                            placeholder="MM/YY"
                            maxLength="5"
                            register={register}
                            errors={errors}
                            onChange={e => {
                                let value = e.target.value.replace(/\D/g)
                                if (value.length >= 2) {
                                    value = value.slice(0, 2) + `/` + value.slice(2)
                                }
                                if (value.length === 5) {
                                    e.target.value = value.slice(0, value.length)
                                    setValue('term', value, {shouldValidate: true})
                                }

                            }}
                        />
                    </CardForm>
                    <CardForm name="CVV">
                        <LFeild
                            name="cvv"
                            type="text"
                            placeholder=""
                            maxLength="3"
                            register={register}
                            errors={errors}
                            onChange={e => {
                                setValue('cvv', e.target.value.replace(/\D/g, ""), {shouldValidate: true})
                                e.target.value = e.target.value.replace(/\D/g, "")
                            }}
                        />
                    </CardForm>
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={handleSubmit(hendlersSubmit)}>Продолжить</Button>
            </div>
        </div>
    );
};

export default Pay;
