import {BOOTSTRAP_ACTION_TYPES, BootstrapActions} from 'store/actions/Bootstrap'

export interface BootstrapState{
    initial: string | undefined
} 

export const initialState: BootstrapState = {
    initial: undefined
}


const handleStartBootstrap = (state:BootstrapState):BootstrapState=>({
    ...state,
    initial:"INIT"
})

export default (state=initialState, action:BootstrapActions)=>{
    switch(action.type){
        case BOOTSTRAP_ACTION_TYPES.START_BOOTSTRAP:
            return handleStartBootstrap(state)
        default:
            return state
    }

}