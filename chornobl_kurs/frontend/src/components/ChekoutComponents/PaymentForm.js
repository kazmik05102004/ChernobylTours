import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './chekoutcomponent.css';

export default function PaymentForm() {


  const [cardNumber, setCardNumber] = React.useState('');
  const [cardPC, setCardPC] = React.useState('');
  const [cardDate, setCardDate] = React.useState('');


  localStorage.setItem('cardNumber', cardNumber);
  localStorage.setItem('cardPC', cardPC);
  localStorage.setItem('cardDate', cardDate);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Спосіб оплати
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="PC"
            fullWidth
            variant="standard"
            onChange={(e)=>setCardPC(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Номер картки"
            fullWidth
            variant="standard"
            onChange={(e)=>setCardNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Термін придатності"
            onChange={(e)=>setCardDate(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Останні три цифри на смузі для підпису"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}