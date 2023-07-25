import * as React from 'react';
import './sign.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from './GeneralComponents/Top';
import Footer from './GeneralComponents/Footer';
import { ExpansionPanelActions } from '@material-ui/core';

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (email === '') {
      setEmailError('Введіть електронну пошту');
      error++
    }else{
      setEmailError('');
      error--
    }
    if (!validateEmail(email)) {
      setEmailError('Введено некоректну електронну пошту');
      error++
    }else{
      setEmailError('');
      error--
    }
    if (name === '') {
      setNameError('Введіть ім\'я')
      error++
    }else{
      setNameError('');
      error--
    }
    if (surname === '') {
      setSurnameError('Введіть прізвище')
      error++
    }else{
      setSurnameError('');
      error--
    }
    if (password === '') {
      setPasswordError('Введіть пароль');
      error++
    }else{
      setPasswordError('');
      error--
    }
  };
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  let EmailResponse = false
  let error = 0;

  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [surnameError, setSurnameError] = React.useState('');

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const checkUserExists = async (email) => {
    const response = await fetch("http://localhost:8080/api/v1/auth"+`/checkEmail?email=${email}`)
    if (response.ok) {
      const data = await response.json();
      EmailResponse = data
    } else {
      setEmailError('Вказана електронна пошта уже зареєстрована');
      throw new Error('Ти хуй');
    }
  };


  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);

  //   if (!validateEmail(value)) {
  //     setEmailError('Некоректний email');
  //   } else {
  //     setEmailError('');
  //   }
  // };

  const handleClick = async (e) => {
    if(error > 0)
      return
    try {
      await checkUserExists(email);
    } catch (error) {
      setEmailError("Вказана електронна пошта уже зареєстрована");
      return;
    }
    if(EmailResponse === true){
      setEmailError('Вказана електронна пошта уже зареєстрована');
      return
    }
    const customer = { name, surname, password, email };
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (response.ok) {
        window.location.href = '/signIn';
      } else {
        const error = await response.json();
        console.error(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <Top/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color: 'rgb(221, 221, 221)'}}>
            Реєстрація
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="Ім'я"
                  name="firstName"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  autoComplete="given-name"
                  error={Boolean(nameError)}
                  helperText={nameError}
                  style={{ color: 'rgb(221, 221, 221)' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Прізвище"
                  name="lastName"
                  value={surname}
                  onChange={(e)=>setSurname(e.target.value)}
                  autoComplete="family-name"
                  error={Boolean(surnameError)}
                  helperText={surnameError}
                  style={{ color: 'rgb(221, 221, 221)' }}
                />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                     required
                     fullWidth
                     id="email"
                     label="Електронна пошта"
                     name="email"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     error={Boolean(emailError)}
                     helperText={emailError}
                     autoComplete="email"
                     style={{ color: 'rgb(221, 221, 221)' }}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   required
                   fullWidth
                   id="password"
                   label="Пароль"
                   name="password"
                   type="password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   autoComplete="current-password"
                   error={Boolean(passwordError)}
                   helperText={passwordError}
                   style={{ color: 'rgb(221, 221, 221)' }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{background: 'rgb(0, 0, 0, 0.35)'}}
              onClick={handleClick}
            >
              Зареєструватись
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/signIn" variant="body2" style={{color: 'rgb(221, 221, 221)'}}>
                  Уже зареєстровані?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}