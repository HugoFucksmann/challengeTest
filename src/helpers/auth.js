
//import Swal from "sweetalert2";

class Auth {

  constructor() {
    this.authenticated = fetch(`${process.env.REACT_APP_URL}/login/verify`, this.headers)
      .then(({ data }) => (this.authenticated = data.verify))
      .catch((e) => {
        console.log(e);
        this.authenticated = false
     });
  }

  get token() {
    return localStorage.getItem("token") || "";
  }
  get headers() {
    return {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "token": this.token,
      },
    };
  }

    async login(email, password, props) { 
        try {
            await fetch(`${process.env.REACT_APP_URL}/login`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            })
              .then((res) => res.json())
              .then(async (resp) => {
                await localStorage.setItem("token", resp.data.token);
                console.log(resp);
                this.authenticated = true;
                props.history.push("/home");
              });
        }catch(e){
            console.log(e);
        }
    }

  logout(props) {
    this.authenticated = false;
    props.history.push("/");
    localStorage.removeItem("token");
  }

  validarToken() {
    return fetch(``,  this.headers)
    .then((resp) => console.log(resp));
  }

  /* isAuthenticated() {
    return this.authenticated;
  } */
}

export default new Auth();
