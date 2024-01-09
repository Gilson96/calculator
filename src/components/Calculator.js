/* eslint-disable default-case */
import React, { useReducer } from 'react'
import Digit from './Digit'
import OperationDigit from './OperationDigit'
import { ACTIONS, reducer } from '../components/Reducer'

const Calculator = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

    return (
        <>
            <h1 className='text-5xl text-white font-bold mt-4'>Calculator</h1>

            <div className='flex flex-col h-[32rem] w-80 rounded-lg bg-slate-700 my-5'>

                <div className='flex h-16 w-30 p-2 m-2 rounded-lg bg-slate-500 justify-end items-center text-white font-bold text-2xl'>
                    
                        <p> {previousOperand} </p>
                        <p>{operation} {currentOperand}</p>
                    
                </div>
                
                    <div className='flex flex-wrap p-3 text-3xl gap-3'>
                        <OperationDigit operation="÷" dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} />
                        <OperationDigit operation="*" dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} />
                        <OperationDigit operation="+" dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} />
                        <OperationDigit operation="-" dispatch={dispatch} action={ACTIONS.CHOOSE_OPERATION} />
                        <Digit digit="7" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="8" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="9" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="4" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="5" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="6" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="1" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="2" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="3" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="0" dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="." dispatch={dispatch} action={ACTIONS.ADD_DIGIT} inlineClass='bg-slate-50 '/>
                        <Digit digit="AC" dispatch={dispatch} action={ACTIONS.CLEAR} inlineClass='w-24 bg-red-200' />
                        <Digit digit="DEL" dispatch={dispatch} action={ACTIONS.DELETE_DIGIT} inlineClass='w-24 bg-red-200'/>
                        <Digit digit="=" dispatch={dispatch} action={ACTIONS.EVALUATE} inlineClass='bg-red-200'/>
                    
                </div>
            </div>
        </>
    )
}

export default Calculator

