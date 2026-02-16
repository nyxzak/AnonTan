import { useState } from 'react'


function App() {
  const [text, setText] = useState('') 
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <>
    <input type="text" />
      <h1>Hello World</h1>
    </>
  )
}

export default App
