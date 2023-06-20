import React, { useEffect, useState } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Leaderboard() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.leaderboard)
      .fetch()
      .then((res) => {
        setParticipants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card sx={{ width: '75%', m: "auto" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Leaderboard
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Time Taken</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.map((participant) => (
                <TableRow key={participant.name}>
                  <TableCell>{participant.name}</TableCell>
                  <TableCell align="right">{participant.score}</TableCell>
                  <TableCell align="right">{participant.timeTaken}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
