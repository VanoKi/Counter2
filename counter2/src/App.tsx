import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SetDisplay} from "./components/setDisplay.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'app'}>
      <SetDisplay/>
      <CounterDisplay />
    </div>
  )
}

export default App
