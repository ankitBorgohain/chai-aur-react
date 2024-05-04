
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {

  return (
    <>
     <h1 className='text-white text-5xl p-4 rounded-lg '>Redux Tool Kit with Chai </h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
