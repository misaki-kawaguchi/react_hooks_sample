import React, { useReducer } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import EventForm from "./EventForm"
import Events from "./Events"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers"

console.log({ AppContext })

const App = () => {
  // 状態遷移したいタイミングでdispatchを呼んで、dispatchの引数にactionを渡す。[]を初期値とする。
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={"Hello I am a Provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
