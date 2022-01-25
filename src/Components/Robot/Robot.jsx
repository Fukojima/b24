import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader, Divider, Box, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import RobotChart from "../Graphics/RobotChart";
import statusCard from "../../assets/Data/statusCard";

import "@fontsource/source-sans-pro";
import { CardActionArea } from "@mui/material";
const configOneLineChart = [{ key: "uv" }];

export default function PlanCard({
  title,
  autor,
  profit,
  active,
  category,
  value,
}) {
  return (
    <Card
      style={{
        backgroundColor: "#d0e9d4",
        marginRight: "1rem",
        marginLeft: "1rem",
        marginTop: "2rem",
      }}
      sx={{ minWidth: 345 }}
    >
      <CardHeader
        style={{
          backgroundColor: "#4a82a5",
          borderBottomRightRadius: "40%",
          color: "#fcfcfc",
        }}
        titleTypographyProps={{ variant: "h5" }}
        title={"Estratégia: Ninja"}
        subheader={
          <Typography sx={{ color: "white" }}> Autor: {autor}</Typography>
        }
      />
      <CardContent style={{ backgroundColor: "#d0e9d4", textAlign: "center" }}>
        <RobotChart
          datas={statusCard.oneLineChartData}
          title="Pacientes Operados"
          value={230}
          config={configOneLineChart}
        />
        <Divider sx={{ backgroundColor: "#b1aeae", marginTop: "2rem" }} />
        <Grid container style={{marginTop:"1rem"}} >
          {" "}
          <Grid item xs={4}>
            <Typography color={"black"} sx={{ display: "flex" }}>
              Lucro total:
            </Typography>

            <Typography color={"green"} variant={"h4"} sx={{ display: "flex" }}>
              <b>{profit}</b>
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid justify="flex-end" item xs={6}>
            <Typography color={"black"} >
              Ativos: <b>{active}</b>
            </Typography>


            <Typography color={"black"} >
              Categoria: <b>Black Box</b>
            </Typography>

          </Grid>
        </Grid>
      </CardContent>
      <CardActionArea
        style={{
          backgroundColor: "#263e61",
          borderTopLeftRadius: "40%",
          textAlign: "center",
          height: "3.5rem",
          fontFamily: ["Source Sans Pro", "sans-serif"],
        }}
      >
        {" "}
        <Typography color="white">{value===0?<b>Ative agora de graça</b>:<b>Ative agora por ${value}</b> }</Typography>
      </CardActionArea>
    </Card>
  );
}
