import { Action } from 'redux'
import { Epic } from 'redux-observable'

import rootReducers from 'store/reducers'
import { createApplicationServices } from 'services'

export type GlobalState = ReturnType<typeof rootReducers>

export type ApplicationService = ReturnType<typeof createApplicationServices>

export type ApplicationEpic<
  R extends Partial<ApplicationService> = ApplicationService,
  T extends Action = Action
> = Epic<T, T, GlobalState, R>

export interface SendToWebSocketMeta {
  sendToWebSocket: boolean
}