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
export default function ChangeCard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          sx={{ fontFamily: "Rubik", fontWeight: "bold", color: "#6462E8" }}
        >
          Estatísticas dos programas
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#6462E8" }} gutterBottom>
          Ultima atualização: 20/07/2022 às 15:42
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <MenuField />{" "}
      </Box>
    </Box>
  );
}
