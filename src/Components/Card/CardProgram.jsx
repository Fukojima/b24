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
export default function CardProgram({program, param, describe}) {
  console.log("adsdasda", program)

  return (
    <Card
    sx={{

      padding:1,
      marginLeft: "1rem",
      marginRight:"1rem",
      marginTop: "7rem",
      backgroundColor: "#F9F8F8",
    }}
  >
     <Typography
        sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >

        Critérios de entrada no programa de {program}:
      </Typography>
      
      <Typography
        sx={{ fontSize: 12, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
       {param}
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
        {describe}
   
      </Typography>

  </Card>
  );
}
