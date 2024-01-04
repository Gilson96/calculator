/* eslint-disable default-case */
import React, { useReducer } from 'react'
import Digit from './Digit'
import OperationDigit from './OperationDigit'
import { ACTIONS, reducer } from '../components/Reducer'



const Calculator = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

    return (
        <>
            <h1 className='text-5xl text-white font-bold'>Calculator</h1>
            <div className='flex flex-col border-4 border-sky-500 h-4/5 w-96 rounded-lg bg-slate-300 my-5'>
                <div className='flex h-16 w-30 border-4 border-sky-500 p-2 m-2 rounded-lg bg-slate-500 justify-end items-center text-white font-bold text-2xl'>
                    <div className='flex '>
                        <p> {previousOperand} </p>
                        <p>{operation} {currentOperand}</p>
                    </div>
                </div>
                <div className='flex h-full w-30 border-4 border-sky-500 p-2 m-2 rounded-lg bg-slate-300 justify-end items-center text-white font-bold'>

                    <div className='flex w-1/2 h-full flex-wrap text-5xl gap-2'>
                        <Digit digit="1" dispatch={dispatch} />
                        <Digit digit="2" dispatch={dispatch} />
                        <Digit digit="3" dispatch={dispatch} />

                        <Digit digit="4" dispatch={dispatch} />
                        <Digit digit="5" dispatch={dispatch} />
                        <Digit digit="6" dispatch={dispatch} />

                        <Digit digit="7" dispatch={dispatch} />
                        <Digit digit="8" dispatch={dispatch} />
                        <Digit digit="9" dispatch={dispatch} />
                        <Digit digit="5" dispatch={dispatch} />


                        <Digit digit="0" dispatch={dispatch} />
                        <Digit digit="." dispatch={dispatch} />

                    </div>
                    <div className='flex w-1/2 h-full flex-wrap text-5xl gap-2'>
                        <OperationDigit operation="÷" dispatch={dispatch} />
                        <OperationDigit operation="*" dispatch={dispatch} />
                        <OperationDigit operation="+" dispatch={dispatch} />
                        <OperationDigit operation="-" dispatch={dispatch} />

                        <button className='border-2 border-sky-500 rounded-lg p-2 bg-sky-300' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>

                        <button className='border-2 border-sky-500 rounded-lg p-2 bg-sky-300' onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>

                        <button className='border-2 border-sky-500 rounded-lg p-2 bg-sky-300' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator


{/* <div className='flex border-2 border-sky-500 p-2 bg-slate-400 w-2/3 m-2 items-end rounded-md'>
<div className='previous-operand'>

</div>
<div className='current-operand'>{currentOperand}</div>
</div>
<div className='flex flex-col gap-3'>

<div className='w-full p-3 gap-3'>

    


    

    
</div>
</div> */}