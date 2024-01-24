import { useState } from 'react'
import './Home.module.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Home
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default Home
