import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Top from './GeneralComponents/Top';
import Footer from './GeneralComponents/Footer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import jwt from 'jsonwebtoken';
import './excursionChoose.css';

export default function ExcursionChoose() {
  const [excursions, setExcursion] = useState([]);
  const [userId, setUserId] = useState();

  const history = useHistory();
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Перевіряємо наявність токена при завантаженні сторінки
    if (!token) {
      // Якщо токен відсутній, перенаправляємо користувача на сторінку входу
      window.location.href = '/signIn';}
    // else {
    //   // Розкодовуємо токен, щоб отримати ідентифікатор користувача
    //   try {
    //     const decodedToken = jwt.verify(token, '753778214125442A472D4B6150645367566B59703373357638792F423F452848'); // Замініть 'your_secret_key' на ваш секретний ключ
    //     setUserId = decodedToken.userId;
    //     // Використовуйте userId для подальших дій
    //   } catch (error) {
    //     console.log('Помилка при розкодуванні токена:', error);
    //   }
    // }
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/sheduleOfExcursion/watch', {
      headers: {
        signIn: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setExcursion(result);
      });
  }, []);

  return (
    <div>
      <Top />
      <div>
        <div id="excursion">
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            marginTop={1}
            paddingLeft={30}
          >
            {excursions.map((excursion) => {
              if (excursion.excursionid === 1) {
                return (
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 150,
                      },
                    }}
                  >
                    <Paper elevation={0}>
                      <div>
                        Дата екскурсії: {excursion.day}
                        <br />
                        К-сть вільних місць: {excursion.numberoffreeplaces}
                        <br />
                        Ціна: {excursion.cost}
                        <br />
                        <Button
                          id="but"
                          variant="text"
                          href={`http://localhost:3000/excursionGeneral/excursionChoose/order/${excursion.sheduleofexcursionid}`}
                        >
                          Оформити квиток
                        </Button>
                      </div>
                    </Paper>
                  </Box>
                );
              }
            })}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}