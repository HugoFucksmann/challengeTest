
  export function token() {
    return localStorage.getItem("token") || "";
  }
 
  export async function login(email, password, props) { 
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
              await localStorage.setItem("token", resp.token);
              props.history.push("/home");
            });
      }catch(e){
          console.log(e);
      }
  }

  export function logout(props) {
    props.history.push("/");
    localStorage.removeItem("token");
  }

