import './App.css';
import React, { useState, useEffect } from 'react';
import Loader from './components/loader';
import HomePage from './pages/home';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [showHello, setShowHello] = useState(false);

  //simulate loading with a timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      const helloTimeout = setTimeout(() => {
        setShowHello(true);
      }, 1000);
      return () => clearTimeout(helloTimeout);
    }
  }, [loading]);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <Loader name="Hetal K.Pandya"/>
        ) : (
          showHello && <HomePage />
        )}
      </header>
    </div>
  );
}

export default App;
