import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Box } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ValuationCard({title, value, color, icon}) {
  return (
    <Card  sx={{ maxWidth: 345, marginTop:"5rem", backgroundColor:"#F9F8F8"}} >
     
        <CardContent>
  
          <Typography color={color} variant="h10" component="div" sx={{ display:"flex", justifyContent:"center",
  alignItems:"center"} }>
          
          {title}
          </Typography>
          <Typography variant="h6" color={color} sx={{ display:"flex", justifyContent:"center",
  alignItems:"center"} }>
      {icon} {value}
          </Typography>
        </CardContent>

    </Card>
  );
}