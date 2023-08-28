import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logFail, setLogFail] = React.useState(0);
  const navigate = useNavigate();

  const data = {
    username: username,
    password: password,
  };

  const login = (data) => {
    if (validateLogin(data)) {
      navigate("/home");
    }
  };

  const validateLogin = () => {
    if (data.username === "admin") {
      if (data.password === "admin") {
        console.log(" Login Successfull ");
        setLogFail(0);
        return true;
      } else {
        console.log(" Please Enter Correct Password ");
        setLogFail(1);
        return false;
      }
    } else {
      console.log(" Please Enter Correct Username ");
      setLogFail(1);
      return false;
    }
  };

  return (
    <>
      <Box id="login-box" component="form" sx={{ m: 1, width: "25ch" }}>
        <Stack spacing={2} className="form">
          <h2 className="title">Login</h2>
          <TextField
            id="username"
            label="username"
            variant="outlined"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button
            variant="contained"
            onClick={() => {
              login(data);
            }}
          >
            LOGIN
          </Button>
        </Stack>
      </Box>
      <br />
      {logFail === 1 ? (
        <div>Login Failed. Please Check Credentials...</div>
      ) : (
        ""
      )}
      <br />
      <div className={StyleSheet.footer}>
        <h4>
          Created By :{" "}
          <a
            href="https://www.linkedin.com/in/naveen-kumar-alapati-0828aa199"
            className={StyleSheet.author}
          >
            Naveen Alapati
          </a>{" "}
          | alapatinaveen18@gmail.com
        </h4>
      </div>
    </>
  );
}

//https://www.linkedin.com/in/naveen-kumar-alapati-0828aa199
