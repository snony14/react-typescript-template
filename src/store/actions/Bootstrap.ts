import {action, ActionUnion} from 'types/utils'

export const  BOOTSTRAP_ACTION_TYPES = {
    START_BOOTSTRAP : "BOOTSTRAP/START_BOOTSTRAP",
}

export const BootstrapActions = {
    startBootstrap: action<typeof BOOTSTRAP_ACTION_TYPES.START_BOOTSTRAP>(BOOTSTRAP_ACTION_TYPES.START_BOOTSTRAP)
}

export type BootstrapActions = ActionUnion<typeof BootstrapActions>
