import * as React from "react";
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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function InfoCard() {
  return (
    <Card item
      sx={{
        width: "22rem",
        height: "32rem",
        marginTop: "5rem",
        position: "absolute",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Informações
        </Typography>
        <Divider sx={{ backgroundColor: "#b1aeae", opacity: "0.5" }} />
        <Grid container>
          <Grid xs={8}>
            <Typography
              sx={{  marginTop: "2rem", mb:1.5 }}
              color="text.secondary"
            >
              <b>Robôs ativos:</b>
            </Typography>
          </Grid>
          <Grid xs={2}  sx={{  marginTop: "2rem", mb:1.5 }}>
            <Typography
            
              color="text.secondary"
            >
              1
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              <b>Lucro do dia:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
          
              color="text.secondary"
            >
              $ 100
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
           
              color="text.secondary"
            >
              <b>Lucro do mês:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
             
              color="text.secondary"
            >
              $ 2300
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
             <b> Operações abertas:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
              8
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
              <b>Operações fechadas:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
              220
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
             <b>Negociações com lucro:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
              89%
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
             <b> Negociações com perda:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
              11%
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
             <b> Data inicial:</b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography
             sx={{mb:1.5}}
              color="text.secondary"
            >
              01/01/2022
            </Typography>
          </Grid>
          <Grid sx={{mt:15}}><Typography  variant="subtitle2">Ultima atualização: 10/01/2022 às 18:42</Typography></Grid>
        </Grid>


        
       
      </CardContent>
      {/* <CardActions>
        <Button size="small">Ação</Button>
      </CardActions> */}
    </Card>
  );
}
