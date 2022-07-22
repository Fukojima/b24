import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import { AppContext } from "../../Context/AppContext";
import { TextField } from "@mui/material";
const programs = [
  {
    label: "Visão Geral",
    id: 0,
  },
  {
    label: "Diabetes",
    id: 1,
  },
  {
    label: "Hipertensão",
    id: 2,
  },
  {
    label: "Gestante",
    id: 3,
  },


];
export default function MenuField() {
  const { selectedOption, setSelectedOption } = React.useContext(AppContext);



  return (
    <TextField
    fullWidth
    size="small"
      select
      value={selectedOption}
      onChange={({ target: { value } }) => setSelectedOption(value)}
      autoComplete="off"
      label="Selecione um programa..."
    >
      {programs.map((option) => {
        return (
          <MenuItem  key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
