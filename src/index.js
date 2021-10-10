import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createTheme({
  palette: {
    primary: {
      main: "#131313",
      hoverColor: "#100f11",
      hoverBorderColor: "#4DA0FD"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "15px",
      medium: "27px",
      large: "35px",
      enormous: "68px"
    },
    fontWeight: {
      small: "400",
      medium: "500",
      large: "600"
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
