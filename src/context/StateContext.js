import React from 'react'
import Context from './context'
export default function StateContext(props) {
  
    const state={
      "Heading":'Sai Medical',
   
    }
  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  )
}
