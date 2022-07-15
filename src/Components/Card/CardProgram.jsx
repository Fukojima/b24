import * as React from "react";
import useDetails from "../../service/useDetails";

import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import MenuField from "../Utils/MenuField";
export default function CardProgram() {
  

  return (
    <Card
    sx={{
      width: 600,
      padding:1,
      marginLeft: "1rem",
      marginTop: "7rem",
      backgroundColor: "#F9F8F8",
    }}
  >
     <Typography
        sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
        Critérios de entrada no programa de Obesidade:
      </Typography>
      <Typography
        sx={{ fontSize: 12, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
        IMC > 30
      </Typography>
      <Typography
        sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
       Sobre o Programa:
      </Typography>
      <Typography
        sx={{ fontSize: 12, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
   O Programa de Obesidade tem como principal objetivo promover o emagrecimento saudável, progressivo e duradouro através de tratamento clínico, realizando acompanhamento nutricional e psicológico dos beneficiários
      </Typography>

  </Card>
  );
}
