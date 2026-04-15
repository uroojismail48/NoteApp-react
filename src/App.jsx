import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copy = [...task]
    copy.push({ title, details })

    setTask(copy)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copy = [...task]
    copy.splice(idx, 1)
    setTask(copy)
  }

  return (
<div className="min-h-screen lg:flex bg-gray-950 text-white">

    
      <form
        onSubmit={submitHandler}
        className="flex gap-6 lg:w-1/2 p-10 flex-col items-start"
      >

        <h1 className="text-4xl mb-4 font-extrabold tracking-wide drop-shadow-md">
          Add Notes
        </h1>

    
        <input
          type="text"
          placeholder="Note Title"
          className="px-5 py-3 w-full rounded-xl bg-white/20 backdrop-blur-md
                     placeholder-white/70 text-white font-medium outline-none 
                     border border-white/30 focus:border-white transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

   
        <textarea
          placeholder="Write details here..."
          className="px-5 py-3 h-36 w-full rounded-xl bg-white/20 backdrop-blur-md
                     placeholder-white/70 text-white font-medium outline-none border 
                     border-white/30 focus:border-white transition"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

    
        <button
          className="w-full py-3 rounded-xl bg-black text-rose-600 
                     font-bold active:scale-95 transition shadow-md"
        >
          Add Note
        </button>

      </form>

      <div className="lg:w-1/2 p-10 lg:border-l-2 border-white/20">
        <h1 className="text-4xl font-extrabold tracking-widest drop-shadow-md">
          Recent Notes
        </h1>

        <div className="flex flex-wrap items-start justify-start gap-6 mt-8 h-[90%] overflow-auto">

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="relative h-56 w-44 bg-black text-white rounded-xl p-4 pt-10 
                         shadow-lg hover:shadow-xl transition duration-300"
            >
             
              <h3 className="font-bold text-lg leading-tight text-rose-600">
                {elem.title}
              </h3>

             
              <p className="mt-2 text-sm text-gray-700 leading-tight">
                {elem.details}
              </p>

         
              <button
                onClick={() => deleteNote(idx)}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-5/6 
                           bg-rose-600 text-white py-1.5 rounded-md text-xs font-bold
                           active:scale-95 hover:bg-rose-700 transition"
              >
                Delete
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default App
