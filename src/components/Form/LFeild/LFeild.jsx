import React, {forwardRef} from 'react';
import style from './LFeild.module.scss';

const LField = forwardRef((props, ref) => {

    const {errors, type, appClassName, register, name, placeholder, ...rest} = props
    return <div className={`${style.main} ${appClassName ? appClassName : ""}`}>
        <div
            style={{
                borderColor: errors[name] && '#FF3333'
            }}
        >
            <input
                placeholder={placeholder}
                type={type ? type : "text"}
                {...register(name)}
                {...rest}
            />
        </div>
    </div>
})
export default LField