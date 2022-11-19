import * as React from "react";
import useDetails from "../../service/useDetails";
import { Typography, Box, Divider, Grid, Avatar } from "@mui/material";
import { blue } from "@material-ui/core/colors";
import { LocalHospitalRounded } from "@mui/icons-material";
export default function InfoCard() {
  const [details, setDetails] = React.useState([]);
  const [service, setService] = React.useState("");

  const month = 3;
  React.useEffect(() => {
    Services(month);
  }, [service]);

  async function Services(month) {
    const { getDetails } = useDetails();
    let detailsResponse = [];

    detailsResponse = await getDetails(month);
    setDetails(detailsResponse[0].services);
  }

  const services = details?.map((item) => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Grid container>
            {" "}
      {" "}
            <Grid xs={6}>       <Typography color="text.secondary">
            {!!item?.service &&
              item.service.charAt(0).toUpperCase() +
                item.service.slice(1, item.service.length).toLowerCase()}
            <b> : </b>
          </Typography></Grid>
            <Grid item xs={2}>
              {" "}
              <Typography
                color="text.secondary"
                sx={{
                  marginLeft: "5px",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
              </Typography>
            </Grid>
          </Grid>
   
        </Box>
      </>
    );
  });

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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: "Rubik",
              fontWeight: "bold",
              color: "#6462E8",
            }}
          >
            Detalhamento dos Serviços
          </Typography>
          <Typography sx={{ fontSize: 14, color: "#6462E8" }} gutterBottom>
            Última atualização:{" "}
            <Typography component="span" variant="inherit" sx={{}}>
              10/11/2022 às 18:42
            </Typography>
          </Typography>
        </Box>
        <Avatar
          sx={{
            marginRight: "10px",
            backgroundColor: "#6452E8",
          }}
        >
          <LocalHospitalRounded />
        </Avatar>
      </Box>
      <Divider sx={{ backgroundColor: "#b1aeae", opacity: "0.2" }} />
      {services}
    </Box>
  );
}
