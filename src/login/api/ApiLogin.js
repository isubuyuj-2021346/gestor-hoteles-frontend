import Swal from "sweetalert2";

export const login = async (email, password) => {
  try {
    if(email === "Gabriel@gmail.com" && password===123456){
      return true
    }else{
      return false
    }
    // const token = response.data.token;
    // // Guardar token en el almacenamiento local
    // token ? localStorage.setItem("token", token) : null;

    // return token;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `No se ha podido iniciar sesión`,
    });
  }
};
