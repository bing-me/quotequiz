import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useStateContext } from "../hooks/useStateContext";

export default function Layout() {
  const { resetContext, setContext } = useStateContext();
  const navigate = useNavigate();

  const logout = () => {
    resetContext();
    navigate("/");
  };

  const leaderboard = () => {
    navigate("/leaderboard");
  };

  const restart = () => {
    setContext({
      timeTaken: 0,
      selectedOptions: [],
    });
    navigate("/quiz");
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ width: '90%', m: "auto", display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h4" align="center" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            Quote Quiz
          </Typography>
          <Box position='absolute' left='80%' sx={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={restart}>Re-try Quiz</Button>
            <Button onClick={leaderboard}>Leaderboard</Button>
            <Button onClick={logout}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
