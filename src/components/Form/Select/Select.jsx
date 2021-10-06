import React from 'react';
import './Select.module.scss';
import SelectLib from 'react-select'
import {Controller} from "react-hook-form";

const Select = ({
                    appClassName,
                    name,
                    control,
                    options,
                    placeholder = "",
                    errors,
                    disabled,
                }) => {

    const customStyles = {
        indicatorSeparator: () => ({}),
        control: () => ({
            borderRadius: "8px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            boxSizing: "border-box",
            border: `1px solid ${errors[name] ? "#FF3333" : "#DEDCDC"}`,
            minHeight: "40px",
        })
    }

    return (
        <div className={`material-ui__select ${appClassName}`}>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <SelectLib
                        {...field}
                        styles={customStyles}
                        options={options}
                        placeholder={placeholder}
                        className={`material-ui__select__container ${errors[name] && 'material-ui__select__container__active'}`}
                        classNamePrefix={`material-ui__select`}
                        isSearchable={false}
                        isDisabled={disabled}
                    />
                )}
            />
        </div>

    );
};

export default Select