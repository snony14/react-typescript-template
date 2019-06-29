import { Action, createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import combinedEpics from './epics'
import { GlobalState, ApplicationService } from 'types/Store'

export default function configureStore(services: ApplicationService) {
  const epicMiddleware = createEpicMiddleware<Action, Action, GlobalState, ApplicationService>({
    dependencies: services,
  })

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)))

  epicMiddleware.run(combinedEpics)

  return store
}