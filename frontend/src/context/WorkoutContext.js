import { createContext, useReducer } from "react";


export const WorkoutsContext = createContext()
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return { workouts: action.payload }
        case 'CREATE_WORKOUT':
            return { workouts: [action.payload, ...state.workouts] }
        case 'DELETE_WORKOUT':
            
            const temp=state.workouts.filter(work=>work._id!==action.payload.workout._id)

            
        return {
            workouts:temp
        }
        default: return state;
    }
}
export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}

        </WorkoutsContext.Provider>
    )

}