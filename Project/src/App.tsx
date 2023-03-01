import { useState } from 'react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom'; 
import styles from './App.module.css';
import './global.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
