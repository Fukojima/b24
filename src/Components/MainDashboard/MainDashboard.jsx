import React from "react";
import ValuationCard from "../Card/ValuationCard";
import InfoCard from "../Card/InfoCard";
import { Grid, Card, Typography } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import VerticalBarChart from "../Graphics/VerticalBarChart";
import InfoBarChart from "../Graphics/InfoBarChart";
import statusCard from "../../assets/Data/statusCard";
import AreaGraph from "../Graphics/AreaGraph";
import PieGraph from "../Graphics/PieChart";
import InfoTable from "../InfoTable/InfoTable";
import DonutChart from "../Graphics/DonutChart";
import { NavLink, useLocation } from "react-router-dom";
import { ResponsiveContainer } from "recharts";

export default function MainDashboard() {
  const configOneLineChart = [{ key: "uv" }];
  const configBarChart = [
    {
      keyBar: "agendado",
      keyLine: "cancelado",
      color: "#F32A28",
      title: "Agendado",
    },
    { color: "#3FA500", title: "Cancelado" },
  ];
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={2}>
          <ValuationCard
            title={"Capital investido:"}
            value={"$ 12.000"}
            color={"text.secondary"}
          />
        </Grid>
        <Grid item xs={2}>
          <ValuationCard
            title={"Valor atual:"}
            value={"$ 26.500"}
            color={"text.secondary"}
          />
        </Grid>
        <Grid item xs={2}>
          <ValuationCard
            title={"P/L Realizado:"}
            value={"$ 14.000"}
            color={"#25ec82"}
            up={true}
          />
        </Grid>
        <Grid item xs={2}>
          <ValuationCard
            title={"Margem disponivel:"}
            value={"$ 8.725"}
            color={"text.secondary"}
          />
        </Grid>
        <Grid item xs={4}>
          <InfoCard />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={8}>
          <AreaGraph
            datas={statusCard.oneLineChartData}
            title="Pacientes Operados"
            value={230}
            config={configOneLineChart}
          />
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={4}>
          <VerticalBarChart />
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxHeight: 185, marginTop: "2rem" }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Sentimento do Mercado
            </Typography>
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={1}
              arcPadding={0.1}
              colors={["#9AC0D8"]}
              hideText={true}
              cornerRadius={1}
              percent={0.6}
            />
          </Card>
        </Grid>
        <Grid item xs={2}>
          {" "}
          <PieGraph datas={statusCard.barChartData} config={configBarChart} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={11.3}>

          <Card sx={{ marginTop: "2rem" }}>
            <InfoTable />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={7}>
          
          <InfoBarChart />

        </Grid>
        <Grid item xs={4.3}>
<DonutChart/>
        </Grid>
      </Grid>
    </>
  );
}
