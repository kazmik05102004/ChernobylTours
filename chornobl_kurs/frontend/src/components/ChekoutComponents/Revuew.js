import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import './chekoutcomponent.css';

export default function Review() {
  const {id} = useParams()

  const [excursion, setExcursion] = React.useState({})
  const [excursionInfo, setExcursionInfo] = React.useState({})
  const [customer, setCustomer] = React.useState({})
  const token = localStorage.getItem('token')
  const cardNumber = localStorage.getItem('cardNumber')
  const cardPC = localStorage.getItem('cardPC')
  const cardDate = localStorage.getItem('cardDate')
  
  const payments = [
    { name: 'Власник картки: ', detail: cardPC },
    { name: 'Номер картки: ', detail: cardNumber },
    { name: 'Термін дії: ', detail: cardDate },
  ];

  React.useEffect(() => {
    fetch(`http://localhost:8080/sheduleOfExcursion/${id}`, {
      headers: {
        signIn: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setExcursion(result);
      })
  }, []);

  React.useEffect(() => {
    if (excursion.excursionid) {
      fetch(`http://localhost:8080/excursion/${excursion.excursionid}`, {
        headers: {
          signIn: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setExcursionInfo(result);
        })
    }
  }, [excursion.excursionid]);

  React.useEffect(() => {
    fetch('http://localhost:8080/customer/getUser', {
      headers: {
        signIn: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setCustomer(result);
      })
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Замовлення:
      </Typography>
      <List disablePadding>

      <ListItem key={excursionInfo.excursionname} sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Назва екскурсії"/>
            <Typography variant="body2">{excursionInfo.excursionname}</Typography>
          </ListItem> 

          <ListItem key={excursion.day} sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Дата"/>
            <Typography variant="body2">{excursion.day}</Typography>
          </ListItem> 

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Ціна: " />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {excursion.cost}грн
          </Typography>
        </ListItem>

      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Замовник:
          </Typography>
          <Typography gutterBottom>{customer.surname} {customer.name}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Деталі оплати:
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}