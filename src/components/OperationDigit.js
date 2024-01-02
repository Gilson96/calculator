import React from 'react'
import { ACTIONS } from '../components/Reducer'

const OperationDigit = ({ dispatch, operation}) => {
  return (
    <button className='border-2 border-sky-500 rounded-lg p-4 bg-sky-300' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>{operation}</button>
  )
}

export default OperationDigit

