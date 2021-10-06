import React from 'react';
import style from "./Address.module.scss";
import {CardForm} from "@components/Layout"
import {LFeild, Select} from "@components/Form";
import {Button} from "@components/Button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {addressValidAC} from "@store/reducers/Order/address"
import * as yup from "yup";

const schema = yup.object().shape({
    recipient: yup.string().required("empty"),
    city: yup.string().required("empty"),
    address: yup.string().required("empty"),
    contry: yup.object().required("empty").nullable(),
    index: yup.string().required("empty"),
});


const Address = () => {
    const dispatch = useDispatch();
    const {
        register,
        formState: {errors},
        handleSubmit,
        control
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const contryData = [
        {
            label: "Таджикистан",
            value: 1
        },
        {
            label: "Россия",
            value: 2
        }
    ]

    const hendlersSubmit = (data) => {
        dispatch(addressValidAC(true))
    }
    return (
        <div className={style.main}>
            <div className={style.title}>
                <h1>Информация для доставки</h1>
            </div>
            <div className={style.form}>
                <CardForm name="Получатель">
                    <LFeild
                        name="recipient"
                        type="text"
                        placeholder="ФИО"
                        register={register}
                        errors={errors}
                    />
                </CardForm>
                <CardForm name="Адрес" appClassName={style.address}>
                    <div>
                        <LFeild
                            register={register}
                            name="city"
                            type="text"
                            placeholder="Город"
                            errors={errors}
                        />
                    </div>
                    <div>
                        <LFeild
                            name="address"
                            type="text"
                            register={register}
                            placeholder="Адрес"
                            errors={errors}
                        />
                    </div>
                    <div>
                        <div>
                            <Select
                                control={control}
                                name="contry"
                                options={contryData}
                                errors={errors}
                            />
                        </div>
                        <div>
                            <LFeild
                                name="index"
                                register={register}
                                type="text"
                                placeholder="Индекс"
                                errors={errors}
                            />
                        </div>
                    </div>
                </CardForm>
            </div>
            <div className={style.button}>
                <Button onClick={handleSubmit(hendlersSubmit)}>Продолжить</Button>
            </div>
        </div>
    );
};

export default Address;
