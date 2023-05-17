import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteFactura, UpdateFactura, listFactura } from "../api/ApiFactura";
import { event } from "../models/ModelFactura";
import { UpdateFactura } from "./UpdateFactura";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";

export const ListFactura = () => {
  const [facturas, setFacturas] = useState([]);
  const [factura, setFactura] = useState(Event);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const reload = async () => {
    const result = await listFactura();
    setFacturas(result);
  };

  const handleOpenModal = (u) => {
    setShowModal(true);
    setFactura(u);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const profile = (event) => {
    navigate("/profile", { state: { event } });
  };

  useEffect(() => {
    reload();
  }, [showModal]);

  const eliminar = async (id) => {
    let result = await DeleteFactura(id);
    if (result) {
      setFacturas(facturas.filter((u) => u._id !== id));
      Swal.fire({
        icon: "success",
        title: "Genial!",
        text: "Se eliminó el factura correctamente!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo eliminar el factura!",
      });
    }
  };

  return (
    <>
      <h1>Lista de Facturas</h1>
      <div>
        <table className="table table-hover rounded table-responsive table-bordered">
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Nombre de Factura</th>
              <th>Tipo de Factura</th>
            </tr>
          </thead>
          <tbody>
            {facturas.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u._id}</td>
                  <td>{u.name}</td>
                  <td>{u.type}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleOpenModal(u)}
                    >
                      <EditIcon></EditIcon>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        eliminar(u._id);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        profile(u);
                      }}
                    >
                      <VisibilityIcon></VisibilityIcon>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <UpdateFactura
          userEdit={event}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateFactura>
      </div>
    </>
  );
};