import * as React from "react";
import useDetails from "../../service/useDetails"
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
export default  function InfoCard() {
  const [details, setDetails] = React.useState([]) 
  const [service, setService] = React.useState("");

  const month = 3
  React.useEffect(() => {
    Services(month)
  }, [service]);

 


  
  
  async function Services(month) {
    const {getDetails} = useDetails();
    let detailsResponse = [];
  
   detailsResponse = await getDetails(month);
    setDetails(detailsResponse[0].services);
  }
  


const services = details?.map((item)=>{
  return (
    <>
    <Grid container  sx={{ mt: 1,  }} >
    <Grid xs={8}>
      <Typography
        sx={{ mb: 0.1 }}
        color="text.secondary"
      >
        {item.service}<b> :</b>
      </Typography>
    </Grid>
    <Grid xs={2} >
      <Typography color="text.secondary">{item.quantity}</Typography>
    </Grid>
  </Grid>
  </>
  );
}) 


  return (
    <Card
      item
      sx={{
        width: "22rem",
        height: "32rem",
        marginTop: "5rem",
        position: "absolute",
        backgroundColor:"#F9F8F8"
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Detalhamento
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          Ultima atualização: 10/01/2022 às 18:42
        </Typography>
        <Divider sx={{ backgroundColor: "#b1aeae", opacity: "0.5" }} />
    {services}
      </CardContent>
    </Card>
  );
}
