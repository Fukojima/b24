import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Grid, Box, Typography, styled, Button } from "@mui/material";
import Programs from "../../Pages/Programs";
import { ReactComponent as Logo } from "../../assets/T+saude.svg";
import MainDashboard from "../../Components/MainDashboard/MainDashboard";
import Robots from "../../Pages/Robots";
import BasicModal from "../Utils/BasicModal";

const ContentContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1280px",
  margin: "10px auto",
  padding: 10,
});
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

const styles = {
  tab: {
      minWidth: 200, // a number of your choice
      width: 200, // a number of your choice
  }
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
    if (newValue == 0) {
      window.location.reload();
    }

    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#F9F8F8",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "10px 10px 0px 10px",
          }}
        >
          <Box>
            <Logo width={150} height={40} />
            
          </Box>
         
          <Box>
            <Tabs  value={value} onChange={handleChange}>
              <Tab style={{marginRight:'20px'}}  label="Atendimentos" {...a11yProps(0)} />
              <Tab  style={{marginRight:'20px'}} label="Programas" {...a11yProps(1)} />
              <Tab  style={{marginRight:'20px'}} label="Mapeamento de Comorbidades" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box>
            <BasicModal/>
          </Box>
        </Box>
        {/* <Grid container>
          <Grid item xs={3} align="center">
            <img src={logo} alt="Logo" height="50rem" />
          </Grid>

          <Grid item mt={0.5} xs={3}>
            <PopupConnection />
          </Grid>

          <Grid item xs={1}>
            <ProfileMenu />
          </Grid>
        </Grid> */}
      </Box>
      <TabPanel value={value} index={0}>
        <ContentContainer>
          <MainDashboard />
        </ContentContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Programs />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Robots />
      </TabPanel>
    </Box>
  );
}
