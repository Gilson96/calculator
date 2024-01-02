export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    EVALUATE: 'evaluate',
    DELETE_DIGIT: 'delete-digit'
}



export const reducer = (state, { type, payload }) => {
   const evaluate = ({ currentOperand, previousOperand, operation }) => {
        const prev = parseFloat(previousOperand)
        const current = parseFloat(currentOperand)
        if (isNaN(prev) || isNaN(current)) return ""
        let calculate = ""
        switch (operation) {
            case "+":
                calculate = prev + current
                break
            case "-":
                calculate = prev - current
                break
            case "*":
                calculate = prev * current
                break
            case "÷":
                calculate = prev / current
                break
        }
    
        return calculate.toString()
    }
  
    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            // Only allows one 0 before a number
            if (payload.digit === '0' && state.currentOperand === "0") { return state }
            // And only allows one dot
            if (payload.digit === '.' && state.currentOperand.includes(".")) { return state }

            if(state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }
            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }
            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            }
        case ACTIONS.CLEAR:
            return {}
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    overwrite: false,
                    currentOperand: null
                }
            }
            if(state.currentOperand == null) return state
            if (state.currentOperand.length === 1){
                return {...state, currentOperand: null}
            }
                return{
                    ...state,
                    currentOperand: state.currentOperand.slice(0, -1)
                }
        case ACTIONS.EVALUATE:
            // if (
            //     state.operation == null || 
            //     state.currentOperand || 
            //     state.previousOperand) {
            //         return state
            // }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state)
            }
    }


    
}

