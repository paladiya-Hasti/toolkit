import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, reset } from './redux/Counterslice'

 export const App = () => {
  let data=useSelector(store=>store.counter)
  // console.log(data);
  
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Count:{data.count}</h1>
      <button onClick={()=>dispatch(add(10))}>add</button>
      <button onClick={()=>dispatch(remove(5))}>remove</button> 
      <button onClick={()=>dispatch(reset(0))}>reset</button>
    </div>
  )
}

export default App