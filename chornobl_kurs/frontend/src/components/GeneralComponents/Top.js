import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './general.css';

function Top() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [excursion, setExcursion] = React.useState('');

  const handleChange = (event) => {
    setExcursion(event.target.value);
  };

useEffect(() => {
  // Перевірка наявності токена у localStorage
  const token = localStorage.getItem('token');
  if (token) {
    setIsAuthenticated(true);
  }
}, []);

// const handleExcursion = () => {
//   if(excursion === 10)
//     window.location.href = '/ExcursionGeneral';
// }

const handleLogout = () => {
  // Логіка для виходу користувача
  setIsAuthenticated(false);
  // Видалення токена з localStorage або з контексту додатка
  localStorage.removeItem('token');
  window.location.href = '/';
};

    return (
      <div className="Top"> 
              <header>
                    <Link to="/">
                        <Button onClick={() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 100);}}>ГОЛОВНА</Button>
                    </Link>           
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">ЕКСКУРСІЇ</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={excursion}
                        label="excursion"
                        onChange={handleChange}
                      >
                        <MenuItem onClick={() => {
                        setTimeout(() => {
                          window.location.href = '/ExcursionGeneral';
                        }, 300);}}>Загальна</MenuItem>
                        {/* <MenuItem value={10} onClick={handleExcursion} aria-selected={true}>Загальна</MenuItem> */}
                        <MenuItem value={20} aria-selected={true}>По Прип'яті</MenuItem>
                        <MenuItem value={30} aria-selected={true}>По Чорнобилю</MenuItem>
                      </Select>
                    </FormControl>    
                      <Button>ІНФО</Button>
                      {isAuthenticated ? (
                      <Button onClick={handleLogout}>
                        ВИХІД
                      </Button>
                    ) : (
                    <Link to="/signIn">
                      <Button
                        onClick={() => {
                          setTimeout(() => {
                            window.location.reload();
                          }, 100);
                        }}
                      >
                        ВХІД
                      </Button>
                    </Link>
                  )}
              </header>   
          </div>
    );
  }
  
  export default Top;