import { response } from 'react'
import React, { useState,useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/sudhirmhamane')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
    
  return (
    <div className= ' text-black p-4 text-3xl'>Github Followers: {data.followers}
    
        <img src={data.avatar_url} alt="" width={300}/>
        <p className='text-md text-black p-4 m-4'>About Me: {data.bio}</p>
    </div>
  )
}

export default Github