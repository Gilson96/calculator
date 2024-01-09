import React from 'react'
import { ACTIONS } from '../components/Reducer'

const Digit = ({ dispatch, digit, inlineClass, action, pload}) => {
  return (
    <button className={`flex rounded-full p-2 w-16 h-16 items-center justify-center ${inlineClass}`} onClick={() => dispatch({ type: action, payload: { digit }})}>{digit}</button>
  )
}

export default Digit