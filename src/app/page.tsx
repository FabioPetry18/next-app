'use client'

import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { detailedDiff } from "deep-object-diff";
import Image from "next/image";
import { useState } from "react";
import Logodark from '../../public/logo dark.svg'
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { redirect, useRouter } from "next/navigation";
import { useGlobalContext } from "./context/login";

export default function Home() { 
  const executar =  () => {
    const obj1 = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
      address: {
        street: '123 Main Street',
        city: 'New York',
        country: 'USA'
      },
      hobbies: ['reading', 'painting', 'hiking']
    };
    const obj2 = {
      name: 'John ',
      age: 30,
      email: 'johndoe@example.com',
      address: {
        street: '123 Main Street',
        city: 'New ',
        country: 'USA'
      },
      hobbies: ['reading', 'painting', 'hiking', 'teste']
    };
  
    const differences = detailedDiff(obj1, obj2);
    const lista = obj1.hobbies.filter(item => !obj2.hobbies.includes(item));
    if(lista.length == 0) {
     const  lista2 = obj2.hobbies.filter(item => !obj1.hobbies.includes(item));
     console.log(lista2)
    }

    console.log("teste"+differences)
  };
  
  const { setUsuario } = useGlobalContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'fabio' && password === '123') {
      setUsuario(username);
      router.push('/dash');
    }
  };

  return(
    <Box  width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' >
        <Box  width='70%' height='70%' bgcolor='white' borderRadius='10px' display='flex' alignItems='center' justifyContent='center'>
          <Box display='flex' width='20%' justifyContent='space-between' height='30%' flexDirection='column' >
            <TextField
                error= {false}
                label="Username"
                type="text"
                onChange={(e) => {setUsername(e.target.value)}}
              />
            <TextField
                error= {false}
                label="password"
                type="password"
                onChange={(e) => {setPassword(e.target.value)}}

              />
              <Button sx={{bgcolor: '#605F5E'}} onClick={handleLogin}  variant="contained">Login</Button>

          </Box>
        </Box>
    </Box>
  )
}
