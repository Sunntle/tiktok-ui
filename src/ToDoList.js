import { useReducer, useRef } from "react"
import React from "react"
//1 Init state
const initState = {
  job: '',
  jobs: []
}
//2 Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}
//3 reducer
const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      console.log(newState);
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs,action.payload]
      }
      console.log(newState);
      break;
    case DELETE_JOB:
      const newArr = [...state.jobs]
      newArr.splice(action.payload,1)
      newState = {
        ...state,
        jobs: newArr
      }
      break;
    default:
      break;
  }
  return newState
}
function ToDoList() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state
  const inputRef = useRef()
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
 
  return (
    <div>
      <input
        ref={inputRef}
        value={job}
        onChange={e => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {jobs.map((el,index) =>
          <li key={index}>{el}
           <span onClick={()=> dispatch(deleteJob(index))}>Xoa</span>
          </li>
          

        )}
      </ul>
    </div>
  )
}
export default ToDoList