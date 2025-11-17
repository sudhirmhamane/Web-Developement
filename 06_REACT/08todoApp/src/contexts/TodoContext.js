import {createContext, useContext} from 'react'

export const TodoContext = createContext({})

export const useTodo = () => {
    return useTodo(TodoContext)
}

export const TodoProvider = TodoContext.Provider