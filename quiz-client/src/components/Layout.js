import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useStateContext } from "../hooks/useStateContext";

export default function Layout() {
  const { resetContext } = useStateContext();
  const navigate = useNavigate();

  const logout = () => {
    resetContext();
    navigate("/");
  };

  const leaderboard = () => {
    navigate("/leaderboard");
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ width: 640, m: "auto" }}>
          <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
            Quote Quiz
          </Typography>
          <Button onClick={leaderboard}>Leaderboard</Button>
          <Button onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
