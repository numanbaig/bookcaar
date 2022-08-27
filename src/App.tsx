import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Typography from '@mui/material/Typography';
import Home from './pages/home/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
