import { useState } from 'react'
import './App.css'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  // Function to add a new task
  const addTask = () => {
    if (toDo.trim() !== '') {
      // Check if the task already exists in the list
      const existingTask = toDos.find((task) => task.text === toDo.trim())
      if (!existingTask) {
        setToDos([...toDos, { id: Date.now(), text: toDo.trim(), status: false }])
        setToDo('') // Clear the input field after adding a task
      } else {
        alert('Task already exists!')
      }
    }
  }

  // Function to remove a task
  const removeTask = (taskId) => {
    setToDos(toDos.filter((task) => task.id !== taskId))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Add any task to your list 🌝</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="Add item..."
        />
        <i onClick={addTask} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((task) => (
          <div className="todo" key={task.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos(
                    toDos.map((t) => {
                      if (t.id === task.id) {
                        return { ...t, status: e.target.checked }
                      }
                      return t
                    })
                  )
                }}
                value={task.status}
                type="checkbox"
              />
              <p>{task.text}</p>
            </div>
            <div className="right">
              <i onClick={() => removeTask(task.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
        {toDos.map((task) => {
          if (task.status) {
            return <h1 key={task.id}>{task.text}</h1>
          }
          return null
        })}
      </div>
    </div>
  )
}

export default App
