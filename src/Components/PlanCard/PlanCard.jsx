import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader, Divider, Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import "@fontsource/source-sans-pro"; 
import { CardActionArea } from "@mui/material";


export default function PlanCard({title}) {

  return (
    <Card  style={{ backgroundColor: "#ddcdcd"}} sx={{ minWidth: 345 }}>
      <CardHeader
        style={{ backgroundColor: "#112852", borderBottomLeftRadius:"40%" ,textAlign: "center", fontFamily: ["Source Sans Pro", "sans-serif"] }}
        titleTypographyProps={{variant:'h6' }}
        title={title}
      />
      <CardContent style={{ backgroundColor: "#ddcdcd", textAlign: "center" }}>
        <Box mb={2}>
          <Typography color="black">1x Robô</Typography>
        </Box>
        <Divider sx={{ backgroundColor: "#ddcdcd" }} />
        <Box mb={3} mt={2}>
          <Typography color="black">1x Conexão API</Typography>
        </Box>
        <Divider sx={{ backgroundColor: "#ddcdcd" }} />
        <Box mb={3} mt={2}>
          <Typography color="black">Suporte</Typography>
          <EmailIcon sx={{ color:"black" , marginRight:"1rem", marginTop:"1rem"}} />
          <WhatsAppIcon sx={{ color:"black" }} />
        </Box>
     
      </CardContent>
     <CardActionArea   style={{ backgroundColor: "#112852", borderTopRightRadius:"40%" ,textAlign: "center",height:"3.5rem", fontFamily: ["Source Sans Pro", "sans-serif"] }}>     <Typography color="white">Assinar</Typography></CardActionArea>
    </Card>
  );
}
