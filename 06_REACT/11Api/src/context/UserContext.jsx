import React, { createContext, use } from 'react'


export const dataContext = createContext();
const UserContext = ({children}) => {
    const userName = 'Sudhir';
  return (
    <div>
        <dataContext.Provider value={userName}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext