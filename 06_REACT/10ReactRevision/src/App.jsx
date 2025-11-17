import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
    {
      "name": "Sham Mehta",
      "city": "Nagpur",
      "age": 27,
      "profession": "Software Developer",
      "profile_photo": "https://example.com/profiles/sudhir.jpg"
    },
    {
      "name": "Aditi Sharma",
      "city": "Pune",
      "age": 24,
      "profession": "UI/UX Designer",
      "profile_photo": "https://example.com/profiles/aditi.jpg"
    },
    {
      "name": "Rohan Verma",
      "city": "Mumbai",
      "age": 27,
      "profession": "Data Scientist",
      "profile_photo": "https://example.com/profiles/rohan.jpg"
    },
    {
      "name": "Neha Patil",
      "city": "Bangalore",
      "age": 22,
      "profession": "Web Developer",
      "profile_photo": "https://example.com/profiles/neha.jpg"
    },
    {
      "name": "Amit Kumar",
      "city": "Delhi",
      "age": 30,
      "profession": "Cybersecurity",
      "profile_photo": "https://example.com/profiles/amit.jpg"
    }
  ]


  
  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem,idx){
          return <Card key={idx} user={elem.name} city={elem.city} age= {elem.age} profession= {elem.profession} profile_photo={elem.profile_photo} />
        })}
      </div>
    </div>
  )
}

export default App