const initialState = {
    counter: 0,
    cells: Array.apply(null, {length: 100}).map(Number.call, Number)
}

const reducer = (state = initialState, action) => {
   
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    } 
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    } 
    if (action.type === 'ADD') {
        return {
            counter: state.counter + 5
        }        
    }  
    if (action.type === 'SUBTRACT') {
            return {
                counter: state.counter - 5
            }
        }
        
    return state;
}

export default reducer;