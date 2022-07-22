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
    <Card
      item
      sx={{
        position:"absolute",
        padding: 1,
        width: 700,
        height: "5rem ",
        marginTop: "1rem",
        marginLeft: "1rem",
        marginBottom:"1rem",
        backgroundColor: "#F9F8F8",
      }}
    >
      <CardContent >
        <Grid container sx={{ display: "flex" }} >
        <Grid xs={7}>
          {" "}
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Estatísticas dos programas 
          </Typography>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Ultima atualização: 20/07/2022 às 15:42
        </Typography>
        </Grid>
        <Grid xs={5} >
          <MenuField />{" "}
        </Grid>
        </Grid>

        {/*         

       */}
      </CardContent>
    </Card>
  );
}
