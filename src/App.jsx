import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { todoProvider } from './contexts'

function App() {
const [todos,setTodsos]=useState([])

const addTodo=(todo)=>{
  setTodsos((prev)=>[{id:Date.now(),...todo},...prev])
}

const updateTodo=(id,todo)=>{
  setTodsos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
}

const deleteTodo=(id)=>{
  setTodsos((prev)=>prev.filter((todo)=>todo.id!==id))
}

const toggleComplete=(id)=>{
  setTodsos((prev)=>prev.map((prevTodo)=>prevTodo===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
}


useEffect(()=>{
const todos=JSON.parse(localStorage.getItem("todos"))

if(todos && todos.length>0){
setTodsos(todos)
}

},[])

useEffect(()=>{
  localStorage.setItems("todos",JSON.stringify(todos))
},[todos])



  return (
    <todoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
            </todoProvider>
  );
}

export default App
