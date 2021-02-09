const base_url = process.env.REACT_APP_URL;

export const imagenUrl = (img) => {
    if (!img) {
      return `${base_url}/upload/noticias/no-image`;
    } else if (img.includes("https")) {
      return img;
    } else {
      return `${base_url}/upload/usuarios/${img}`;
    }
}