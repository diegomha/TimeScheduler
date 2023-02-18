import { useState } from 'react';
import './global.css';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom'; 

export function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
