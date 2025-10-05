import React, { useState } from 'react'
import Child from './child'

const Parent = () => {
    const [count, setCount] = useState(0)
    const [profile, setProfile] = useState({name : 'john', age : 24})

    const handleIncement = () => {
        setCount(prev => prev + 1)
    }

  return (
    <>
     <Child profile={profile} />
     <p>{count}</p>
     <button onClick={handleIncement}>Increment</button>
    </>
  )
}

export default Parent