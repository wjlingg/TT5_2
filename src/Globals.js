import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


export default{
    
}

export const GlobalContext = React.createContext([])


export const ButtonRed = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#FF5666"),
    backgroundColor: "#FF5666",
    '&:hover': {
      backgroundColor: "#FF5666",
    },
    textTransform:"capitalize",
}));

export const ButtonBlue = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#2964F5"),
    backgroundColor: "#2964F5",
    '&:hover': {
      backgroundColor: "#2964F5",
    },
    textTransform:"capitalize",
}));