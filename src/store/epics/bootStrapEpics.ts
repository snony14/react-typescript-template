import { combineEpics } from 'redux-observable'
import { ignoreElements } from 'rxjs/operators'

import {ApplicationEpic} from 'types/Store'

const bootStrapEpics:ApplicationEpic = action$ =>
    action$.pipe(
        ignoreElements()
    )

export default combineEpics(bootStrapEpics)