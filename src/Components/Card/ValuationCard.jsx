import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Box } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import envio from '../../assets/envio.png';

export default function ValuationCard({title, value, color, up,down}) {
  return (
    <Card  sx={{ maxWidth: 345, marginTop:"5rem"}} >
      {up?(<Grid style={{display:"flex", position:"absolute", marginLeft:"10rem"}}><img src={envio} alt="crescimento" height="30rem" /></Grid>):""}

        <CardContent>
          <Typography  variant="h10" component="div">
       {title}
          </Typography>
          <Typography variant="h5" color={color} sx={{ display:"flex", justifyContent:"center",
  alignItems:"center"} }>
      {value}
          </Typography>
        </CardContent>

    </Card>
  );
}