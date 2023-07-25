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



const theme = createTheme();

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');

    if (email === '') {
      setEmailError('Введіть електронну пошту');
    }else{
      setEmailError('');
    }
    if (!validateEmail(email)) {
      setEmailError('Введено некоректну електронну пошту');
    }else{
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('Введіть пароль');
    }else{
      setPasswordError('');
    }
    // checkPasswordExists(password)
    // .then((passwordExists) => {
    //   if (passwordExists) {
    //     setEmailError('Ця електронна пошта вже використовується');
    //   }})
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  
  
      // const passwordExists = await checkPasswordExists(password);
      // if (passwordExists) {
      //   setPasswordError('Цей пароль вже використовується');
      //   return;
      // }
  
      // Виконайте необхідні дії, коли електронна пошта та пароль валідні
  

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [response, setResponse] = React.useState('');

  const [error, setError] = React.useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUserExists = async (email) => {
    fetch("http://localhost:8080/api/v1/auth"+`/checkEmail?email=${email}`)
    if (response.ok) {
      const data = await response.json();
      setResponse(data);
    } else {
      throw new Error('Request failed');
    }
  };
  
  const handleClick = async () => {
     try {
      const response = await fetch("http://localhost:8080/api/v1/auth/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Збереження токена у localStorage або в контексті додатка
        localStorage.setItem('token', token);
        console.log('Авторизація успішна');
        // Перенаправлення на домашню сторінку або іншу захищену сторінку
         window.location.href = '/';
      } else if (response.status === 403) {
        setEmailError('Не правильна електронна пошта');
        setPasswordError('Не правильний пароль');
        return
      } else {
        // Інша помилка
        setError('Помилка авторизації: невідома помилка');
      }
     } catch (error) {
       // Обробка помилки з'єднання
       console.log('Помилка з\'єднання');
     }

     
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
            Вхід
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Електронна пошта"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              helperText={passwordError}
              error={Boolean(passwordError)}
              id="password"
              autoComplete="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{background: 'rgb(0, 0, 0, 0.35)'}}
              onClick={handleClick}
            >
              Увійти
            </Button>
            <Grid container>
              <Grid item>
              <Link href="http://localhost:3000/signUp" variant="body2" style={{color: 'rgb(221, 221, 221)'}}>
                  {"Ще не маєте акаунта?"}
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