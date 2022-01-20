import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SwapCallsIcon from '@mui/icons-material/Cable';
export default function PopupConnection() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <SwapCallsIcon/> Gerenciar Conexões
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Teste</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Teste
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Teste"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}