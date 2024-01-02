import React from 'react'
import { ACTIONS } from '../components/Reducer'

const Digit = ({ dispatch, digit}) => {
  return (
    <button className='border-2 border-sky-500 rounded-lg p-2 bg-sky-300' onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}>{digit}</button>
  )
}

export default Digit