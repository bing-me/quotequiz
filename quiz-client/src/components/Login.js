import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Center from "./Center";
import useForm from "../hooks/useForm";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import { useStateContext } from "../hooks/useStateContext";
import { useNavigate } from "react-router";

const getFreshModel = () => ({
  name: "",
  email: "",
});

export default function Login() {
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate();

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  useEffect(() => {
    resetContext();
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (validate())
      createAPIEndpoint(ENDPOINTS.participant)
        .post(values)
        .then((res) => {
          setContext({ participantId: res.data.participantId });
          navigate("/quiz");
        })
        .catch((err) => console.log(err));
  };

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(values.email) ? "" : "Email is not valid.";
    temp.name = values.name !== "" ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  return (
    <Center>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Card sx={{ width: 720 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 3 }}>
              Movie Quote Quiz
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              Welcome to the Movie Quote Quiz, the challenge for movie
              buffs and cinephiles! Get ready to put your film knowledge to the
              test and see if you can identify some of the most iconic lines
              from movies spanning several decades.
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              From the captivating 1970s to the exhilarating 2010s, this quiz takes you
              on a journey through cinematic history, showcasing memorable
              quotes from a wide range of movies.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 400, mt: 5 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ my: 3 }}>
              Register/Login with an email and username.
              Only your username will be displayed on the leaderboard.
            </Typography>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "90%",
                },
              }}
            >
              <form noValidate autoComplete="off" onSubmit={login}>
                <TextField
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.email && {
                    error: true,
                    helperText: errors.email,
                  })}
                />
                <TextField
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  {...(errors.name && { error: true, helperText: errors.name })}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ width: "90%" }}
                >
                  Start
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Center>
  );
}
