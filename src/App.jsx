import React, { useEffect, useState } from 'react'
import TableExample from './components/TableExample';

const App = () => {
  const [ width, setWidth ] = useState(window.innerWidth);
  console.log(width);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div><TableExample /></div>
  )
}

export default App