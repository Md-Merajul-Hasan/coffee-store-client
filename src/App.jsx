import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-32 bg-[url(../../src/assets/images/more/15.jpg)] flex gap-4 items-center justify-center'>
        <img className='w-24 h-28' src="../../src/assets/images/more/logo1.png" alt="" />
        <p className='text-white font-semibold text-2xl'>Espresso Emporium</p>
      </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
