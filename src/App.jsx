import { useState } from 'react'
import './App.css'

import Title from './sections/title'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    </>
  )
}

export default App
