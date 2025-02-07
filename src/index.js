import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ThemeContextProvider from './context/ThemeContext';
import {StyledEngineProvider} from "@mui/material";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeContextProvider>
                <Router>
                    <StyledEngineProvider injectFirst>
                        <App />
                    </StyledEngineProvider>
                </Router>
            </ThemeContextProvider>
        </AuthProvider>
    </React.StrictMode>
);

reportWebVitals();
