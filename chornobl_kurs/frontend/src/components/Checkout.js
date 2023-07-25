import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentForm from './ChekoutComponents/PaymentForm';
import Review from './ChekoutComponents/Revuew';
import Top from './GeneralComponents/Top';
import Footer from './GeneralComponents/Footer';
import { useParams } from 'react-router-dom';
import './checkout.css';

const steps = ['Оплата', 'Перевірка'];
const token = localStorage.getItem('token');

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const {id} = useParams()

  const [excursion, setExcursion] = React.useState({})
  const [excursionInfo, setExcursionInfo] = React.useState({})
  const [customer, setCustomer] = React.useState({})
  const token = localStorage.getItem('token')
  const cardNumber = localStorage.getItem('cardNumber')
  const cardPC = localStorage.getItem('cardPC')
  const cardDate = localStorage.getItem('cardDate')
  const [customerid, setCustomerId] = React.useState(0)
  const [customid, setCustomId] = React.useState(0)
  const [excursionid, setExcursionId] = React.useState(0)
  const [sheduleofexcursionid, setSheduleOfExcursionId] = React.useState(0)


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
  }, [id, token]);

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
  }, [excursion.excursionid, token]);

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
  }, [token]);

  const handleClick = async (e) => {
    e.preventDefault()
    setCustomId(1)
    setCustomerId(customer.id)
    setExcursionId(excursion.excursionid)
    setSheduleOfExcursionId(excursion.sheduleofexcursionid)
    const custom = { customid, excursionid, sheduleofexcursionid, customerid};
    fetch("http://localhost:8080/custom/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ", // Змінено тип контенту на "application/json"
        "signIn": `Bearer ${token}`,
      },
      body: JSON.stringify(custom),
    });
  }
  

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
        <Top/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Оплата
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Дякуєм за вашу покупку.
              </Typography>
              <Typography variant="subtitle1">
                Ваш квиток прийде на вашу електронну пошту в межах 1-2 днів.
                Якщо щось піде не так зв'яжіться із нами через пошту або 
                колцентр.
              </Typography>
              <Button
                  variant="contained"
                  onClick={handleClick}
                  sx={{ mt: 3, ml: 1 }}
                >
                На головну
                </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Назад
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Купити' : 'Далі'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}