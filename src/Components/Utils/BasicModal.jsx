import * as React from 'react';
import Modal from '@mui/material/Modal';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Typography, Card, Grid, Box, Divider, FormControl, InputLabel, Input, FormHelperText, Button, CircularProgress } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { format, compareAsc } from 'date-fns'
import useCadSUS from "../../service/useCadSUS";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import CloseIcon from '@mui/icons-material/Close';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '1%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '1%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  minWidth: 200,
  mixHeight: 200,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [textValue, setTextValue] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess]= useState(false)
  const [response, setResponse]= useState({})

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => RequestSUS(textValue);
  const handleReset = () => setTextValue("");
  let detailsResponse = [];
  async function RequestSUS(docId) {
    const { getCADSUS } = useCadSUS();
    setOpen(false)
    setOpenModal(true)
    if (docId.length == 0  ){
      setSuccess(false)
      setMessage('Insira um valor.')
      return
     }else if(docId.length < 15 ){
      setSuccess(false)
      setMessage('Não há registro desse CSN.')
     }
    try {
      detailsResponse = await getCADSUS(docId);
    } catch (e) {

    }

    if (detailsResponse.success){
         setMessage('Sucesso')
         setSuccess(true)
         setResponse(detailsResponse.response)
         console.log()

    }else{
      setSuccess(false)
      setMessage('Não há registro desse CSN.')
    }

    
   
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Consulta CADSUS<PersonSearchIcon /> </Button>
      <Modal
        sx={{ borderRadius: '10%' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
        <Grid container>
<Grid xs={8}> <Typography sx={{ fontWeight: "bold"}} >      Consulta SUS/CNS   
            </Typography></Grid>
            <Grid xs={3}></Grid>
<Grid xs={1}><Button onClick={handleClose}><CloseIcon/></Button></Grid>
</Grid>
          <Divider sx={{ backgroundColor: "#ffff", marginBottom: 5 }} />

          <Box>
            <TextField
              onChange={onTextChange}
              value={textValue}
              label={"Insira seu cns..."} //optional
            />

          </Box>
          <Box>

            <Button onClick={handleSubmit}>Pesquisar</Button>
            <Button onClick={handleReset}>Limpar</Button>
          </Box>


        </Box>

      </Modal>
      <Modal
        sx={{ borderRadius: '10%' }}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        {message == '' ? (
          <Box sx={{
            width: "100%", height: 500,
            alignItems: "center", justifyContent: "center", justifyItems: "center", display: "flex"
          }}>


            <CircularProgress size={100} />


          </Box>) : (
          <Box sx={styleModal}>
           
              <Grid container>
<Grid xs={8}> <Typography sx={{ fontWeight: "bold"}} >      Consulta SUS/CNS   
            </Typography></Grid>
            <Grid xs={3}></Grid>
<Grid xs={1}><Button onClick={handleCloseModal}><CloseIcon/></Button></Grid>

              </Grid>

        
            
            <Divider sx={{ backgroundColor: "#ffff", marginBottom: 5 }} />
            {!success ?
              (<>
                <Box>

                  <Typography><SearchOffIcon />       {message}</Typography>

                </Box>

              </>) :
              (<>
              <Box>
                <Grid container>
                <Grid xs={5} sx={{marginLeft:0}}>
                <Typography sx={{ fontSize: 15, fontWeight: "bold", marginBottom:1 }}>
                Dados Pessoais: 
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold", }}>
                 Nome:
                </Typography>
                <Typography>
                  {response.name}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold", marginTop:2}}>
                 Data de nascimento:
                </Typography>
                <Typography>
                  {response.birth_date?.substring(6,8) + '/' + response.birth_date?.substring(4,6) + '/' + response.birth_date?.substring(0,4)}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
            Nome Mãe:
                </Typography>
                <Typography>
                  {response.mother_name}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
            Nome Pai:
                </Typography>
                <Typography>
                  {response.dad_name || 'Não informado'}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold", marginTop:2}}>
                 Sexo:
                </Typography>
                <Typography>
                  {response.gender }
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 Etnia:
                </Typography>
                <Typography>
                  {response.ethnicity || 'Não informado'}
                </Typography>
                
                </Grid>
                <Divider orientation="vertical" flexItem />

                <Grid sx={{marginLeft:2}} xs={3}>
                <Typography sx={{ fontSize: 15, fontWeight: "bold", marginBottom:1 }}>
                  Contato: 
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 Rua:
                </Typography>
                <Typography>
                  {response.contact?.street}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                  Nº
                </Typography>
                <Typography>
                {response.contact?.address_number}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                  Estado
                </Typography>
                <Typography>
                {response.contact?.state}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                  CEP
                </Typography>
                <Typography>
                {response.contact?.cep}
                </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid sx={{marginLeft:2}} xs={2}>
                <Typography sx={{ fontSize: 15, fontWeight: "bold", marginBottom:1 }}>
                 Documentos: 
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 RG:
                </Typography>
                <Typography>
                  {response.ident_national || 'Não informado'}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 CNS:
                </Typography>
                <Typography>
                  {response.sus_card}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 CPF:
                </Typography>
                <Typography>
                  {response.physic_national?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4") || 'Não informado'}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 PIS/PASEP:
                </Typography>
                <Typography>
                  {response.pis_pasep || 'Não informado'}
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold",marginTop:2 }}>
                 CTPS:
                </Typography>
                <Typography>
                  {response.ctps || 'Não informado'} 
                </Typography>      
                </Grid>
                </Grid>
        
              </Box>


              </>)}

            <Box>

              
            </Box>

         
          </Box>)}

      </Modal>

    </div>
  );
}