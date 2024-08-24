const initialState = {
    chart: []
}

export const chartReducers = (state = initialState, action ) => {
    if (action.type === 'SAVE_CHART'){
        return {
            chart: [...state.chart, action.payload]
        }
    }
    return state
}