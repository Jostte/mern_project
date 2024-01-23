import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBooks from './pages/createBooks'
import DeleteBooks from './pages/deleteBooks'
import EditBooks from './pages/editBooks'
import Home from './pages/Home'
import ShowBook from './pages/showBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
    </Routes>
  )
}

export default App
