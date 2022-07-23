import { createTheme } from "@mui/material";
import { ptBR } from "@mui/material/locale";
import "@fontsource/source-sans-pro";
import customScrollbar from "../Components/CustomStyles/ScrollBar";

let theme = createTheme(
  {
    palette: {
      background: {
        default: "#F0F3FF",
      },
      primary: {
        main: "#6749ED",
        light: "#16679A",
        medium: "#EAF6FF",
        font: "#6749ED",
      },
      secondary: {
        main: "#337EAD",
        light: "#F5FBFF",
        medium: "#0899BA",
      },
      text: {
        primary: "#333F48",
        secondary: "#979FA5",
      },
    },
    typography: {
      fontFamily: ["Maven Pro", "Rubik"].join(","),
    },
  },
  ptBR
);
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: customScrollbar(),
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          maxHeight: "205px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme.palette.primary.main,
          "&:hover": {
            borderColor: theme.palette.primary.main,
          },
        },
        input: {
          color: theme.palette.secondary.dark,
          "&::placeholder": {
            color: theme.palette.secondary.dark,
          },
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.secondary.light,
          borderRadius: "20px",
          color: theme.palette.secondary.main,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          fontWeight: "medium",
          "&.Mui-disabled": {
            color: "#9AC0D8",
            backgroundColor: "rgba(216, 0, 0, 0.1)",
          },
          "&.Mui-selected": {
            color: "white",
            backgroundColor: theme.palette.primary.light,
          },
          "&.MuiPickersDay-today": {
            borderColor: theme.palette.secondary.main,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export { theme };
