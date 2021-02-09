

  export const actualizarArchivo = async ( file, tipo, id ) => {
    try {
      
      const url = `${process.env.REACT_APP_URL}/upload/${tipo}/${id}`;
      const formData = new FormData();
      if( tipo === 'usuario'){
        formData.append("imagen", file);
      }else{
        return false
      }
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "token": localStorage.getItem("token") || "",
        },
        body: formData,
      });

      const data = await resp.json();

      if (data.ok) {
        return data.nombreArchivo;
      } else {
        console.log(data.msg);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  export const mostrarImagen = async (file) => {
    let result
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      
      result = reader.result
    };
    console.log(result);
    return result
  }

