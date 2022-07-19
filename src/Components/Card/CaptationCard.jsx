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
export default function CaptationCard() {
  

  return (
    <Card
    sx={{
      width: 250,
      height:"5rem",
      padding:1,
      marginLeft: "1rem",
      marginTop: "1rem",
      backgroundColor: "#F9F8F8",
    }}
  >
     <Typography
        sx={{ fontSize: 14, marginTop: "1rem", marginLeft: "1rem" }}
        color="text.secondary"
        gutterBottom
      >
        Taxa de captação de pacientes:
      </Typography>


  </Card>
  );
}
