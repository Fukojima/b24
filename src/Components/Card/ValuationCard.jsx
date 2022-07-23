import * as React from "react";
import { Grid, Box, Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
export default function ValuationCard({ title, value, color, icon }) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          width: 60,
          height: 60,
          bgcolor: color || "tomato",
        }}
      >
        {icon}
      </Avatar>
      <Box>
        <Typography
          sx={{
            fontFamily: "Maven Pro",
            fontSize: "1.1rem",
            fontWeight: "medium",
            color: "#979FA5",
          }}
        >
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            fontFamily: "Rubik",
            fontSize: "1.8rem",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          {Number(value) ? <CountUp end={value} duration={2} /> : value}
        </Typography>
      </Box>
    </Box>
  );
}
