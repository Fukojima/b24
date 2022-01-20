import React from "react";
import { Route, BrowserRouter, Routes,Outlet } from "react-router-dom";
import { styled } from "@mui/system";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Config/theme";
import PageWrapper from "./Components/PageWrapper/PageWrapper";




const BodyBackground = styled("div")({
  backgroundImage: `url(${Image})`,
  height: "100vh",
});

function App() {
  
  const PageWrapperMain = () => (
    <>
      <PageWrapper><Outlet /></PageWrapper>
      
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <CssBaseline>
            <BodyBackground>       
                <Routes>
                  <Route path="/" element={<PageWrapperMain/>}>
      

                  </Route>

                </Routes>
            
            </BodyBackground>
          </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
