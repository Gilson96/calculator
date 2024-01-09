import React from 'react'
import { ACTIONS } from '../components/Reducer'

const OperationDigit = ({ dispatch, operation}) => {
  return (
    <button className='flex rounded-full p-2 bg-slate-400 w-16 h-16 items-center justify-center' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>{operation}</button>
  )
}

export default OperationDigit

