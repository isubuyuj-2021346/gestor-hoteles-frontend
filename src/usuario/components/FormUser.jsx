import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formOptions, sendData } from "../helpers/FormUserHelper";

export const FormUser = ({ userProp, titleButton, option }) => {
    const [evento, setEvento] = useState(userProp);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);

    useEffect(() => {
        setUser({ ...evento, password: "" });
    }, []);

    const crud = async () => {
        await sendData(user, option);
    };
    return (
        <form onSubmit={handleSubmit(crud)}>
            <div className="form-group">
                <label className="text-black">Nombre de usuario</label>
                <input
                    {...register("nombre")}
                    type="text"
                    className="form-control"
                    value={user.nombre}
                    onChange={({ target: { value } }) =>
                        setUser(() => ({ ...user, nombre: value }))
                    }
                />
                {errors.nombre && (
                    <span className="text-danger">{errors.nombre.message}</span>
                )}
            </div>
            <div className="form-group">
                <label className="text-black">Correo Electrónico</label>
                <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    value={user.correo}
                    onChange={({ target: { value } }) =>
                        setUser(() => ({ ...user, correo: value }))
                    }
                />
                {errors.correo && (
                    <span className="text-danger">{errors.correo.message}</span>
                )}
            </div>
            <div className="form-group">
                <label className="text-black">Contraseña</label>
                <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    value={user.password}
                    onChange={({ target: { value } }) =>
                        setUser(() => ({ ...user, password: value }))
                    }
                />
                {errors.password && (
                    <span className="text-danger">{errors.password.message}</span>
                )}
            </div>
            <button type="submit" className="btn btn-success">
                {titleButton}
            </button>
        </form>
    );
};