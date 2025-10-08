import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ViewPost from './Posts/ViewPost'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='post/:id' element={<ViewPost />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App