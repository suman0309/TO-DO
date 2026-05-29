import {createContext,useContext} from "react"

export const todo=createContext({
      todos:[
    {
        id:1,
        todo:"Todo msg",
        completed:false,
    },
         ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo=()=>{
    return useContext(todo)
}

export const todoProvider=todo.Provider