import React from "react";
import { FormHotel } from "./FormHotel";
import { Hotel } from "../models/ModelHotel";

export const CreateUser = () => {
  return (
    <>
      <FormHotel
        userProp={Hotel}
        titleButton="Crear Hotel"
        option={1}
      ></FormHotel>
    </>
  );
};
