import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider as MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles'
import theme from './themes/AppTheme'
import Routes from './routes/route'
ReactDOM.render(
<ThemeProvider theme={theme}>
    <Routes/>
</ThemeProvider>, 
document.getElementById('root'));