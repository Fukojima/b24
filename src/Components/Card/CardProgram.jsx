import * as React from "react";
import useDetails from "../../service/useDetails";

import { Typography, Button, Box, Divider, Grid, Avatar } from "@mui/material";
import MenuField from "../Utils/MenuField";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
export default function CardProgram({ program, param, describe }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Rubik",
            color: "#6462E8",
          }}
          color="text.secondary"
        >
          Critérios de entrada no programa de {program}
        </Typography>
        <Avatar
          sx={{
            color: "white",
            backgroundColor: "#6462E8",
          }}
        >
          <HealthAndSafetyIcon />
        </Avatar>
      </Box>
      <Divider />
      <Typography sx={{ fontSize: 16, color: "rgba(100, 98, 232, 0.5)" }}>
        {param}
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight: "bold", color: "#6462E8" }}>
        Sobre o Programa:
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          fontFamily: "Maven Pro",
          color: "rgba(100, 98, 232, 0.5)",
        }}
        color="text.secondary"
      >
        {describe}
      </Typography>
    </Box>
  );
}
