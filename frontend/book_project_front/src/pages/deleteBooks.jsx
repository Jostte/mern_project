import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const HandleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`https://5555-jostte-mernproject-t9kr8eik9la.ws-eu107.gitpod.io/books/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar("Delete successfully", {variant: "success"})
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar("Delete failed", {variant: "error"})
        console.log(error)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete book</h1>

      {loading ? <Spinner /> : '' }
      
      <div className="flex flex-col border-2 items-center border-sky-400 rounded-xl w-[600px] p-3 mx-auto">
        <h3 className='text-2xl'>
          Are you sure want to delete this book?
        </h3>

        <button 
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={HandleDeleteBook} 
        >
          Yes, delete it
        </button>
      </div>

    </div>
  )
}

export default DeleteBooks