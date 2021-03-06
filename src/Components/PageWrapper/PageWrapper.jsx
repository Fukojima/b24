import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid, Box, Typography } from "@mui/material";
import Programs from "../../Pages/Programs";
import logo from "../../assets/TMS.png";
import PopupConnection from "../PopupConnection/PopupConnection";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";
import MainDashboard from "../../Components/MainDashboard/MainDashboard";
import Robots from "../../Pages/Robots"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const configLineChart = [
    {
      key: "alta",
      color: "#47B900",
      title: (
        <span style={{ display: "inline-flex" }}>
          {" "}
          Altas próximos <br /> 3 dias{" "}
        </span>
      ),
    },
    {
      key: "entrada",
      color: "#F32A28",
      title: (
        <span style={{ display: "inline-flex" }}>
          {" "}
          Entradas
          <br /> próximos 3 dias{" "}
        </span>
      ),
    },
    {
      key: "internacao",
      color: "#11528B",
      title: (
        <span style={{ display: "inline-flex" }}>
          {" "}
          Internações <br />
          próximos 3 dias{" "}
        </span>
      ),
    },
  ];
  const handleChange = (event, newValue) => {
    if (newValue == 0){    window.location.reload()}

    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", backgroundColor:"#F9F8F8"}}>
        <Grid container>
          <Grid item xs={3}  align="center" >
            <img src={logo} alt="Logo" height="50rem" />
          </Grid>
          <Grid item xs={5}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Analise Geral" {...a11yProps(0)} />
              <Tab label="Programas" {...a11yProps(1)} />
              <Tab label="Mapeamento de Comorbidades" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Grid item mt={0.5} xs={3}>
            <PopupConnection />
          </Grid>

          <Grid item xs={1}>
            <ProfileMenu />
          </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0} >
        <Grid sx={{marginLeft:"5rem"}}><MainDashboard /></Grid>


      </TabPanel>
      <TabPanel value={value} index={1}>
        <Programs />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Robots/>
      </TabPanel>
    </Box>
  );
}
