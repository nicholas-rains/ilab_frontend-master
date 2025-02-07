import React from 'react';
import { useTheme } from '@emotion/react';
import './LoadingEllipses.css';
 
const LoadingEllipses = () => {
    const theme = useTheme();
    return (
        <div className="loading-ellipses" style={{ '--color': theme.palette.mode === 'dark' ? '#ffffff' : '#000000' }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
 
export default LoadingEllipses;