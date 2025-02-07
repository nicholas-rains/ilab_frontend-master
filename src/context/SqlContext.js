import React, { createContext, useContext, useState } from 'react';

const SQLContext = createContext();

export const SQLProvider = ({ children }) => {
    const [showSQL, setShowSQL] = useState(true);

    return (
        <SQLContext.Provider value={{showSQL, setShowSQL}}>
            {children}
        </SQLContext.Provider>
    );
};

export const useSQL = () => {
    const context = useContext(SQLContext);
    if (!context) {
        throw new Error('useSQL must be used with an SQLProvider');
    }
    return context;
};