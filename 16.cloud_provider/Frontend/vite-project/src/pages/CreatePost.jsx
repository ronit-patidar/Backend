import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const formData = new FormData(event.currentTarget)

    try {
      await axios.post('http://localhost:3000/create-post', formData)
      navigate('/feed')
    } catch (requestError) {
      console.error('Failed to create post:', requestError)
      setError('Unable to create post. Please try again.')
    }
  }

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input type="text" name="caption" placeholder="Enter Caption" required/>
        <button type="submit">Submit</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </section>
  )
}

export default CreatePost
