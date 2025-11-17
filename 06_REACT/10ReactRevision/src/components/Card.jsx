import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='bg-black mr-5 text-white inline-block p-8 m-4 text-center rounded'>
        <img src="sss" className='h-32 w-32 rounded-full mb-3' />
        <h2 className='text-white text-2xl font-semibold mb-4'>{props.user}</h2>
        <h3> City:{props.city}, <br />Age:{props.age}, <br />Profession:{props.profession}</h3>
        <button className=' mt-4 bg-fuchsia-600 p-2 m-1 rounded '>Add Friends</button>
    </div>
  )
}

export default Card