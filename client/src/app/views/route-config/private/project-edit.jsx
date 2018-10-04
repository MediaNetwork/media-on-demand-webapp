import { all, fork, put, race, select, take } from 'redux-saga/effects'

import { actions, types, selectors } from 'state/interface'
import * as EditProject from 'views/pages/edit-project'

const watchGetProject = function*() {
  while (true) {
    yield take(types[ 'PROJECT/GET_FAILED' ])

    yield put(
      actions.requestLocation('/projects')
    )
  }
}

const watchRemoveProject = function*(path) {
  while (true) {
    yield take(`${ types[ 'DIALOG/SHOW' ] }:REMOVE_PROJECT`)

    yield put(
      actions.mergeUIState(path, {
        isRemoveConfirmationDialogActive: true
      })
    )

    const { removeCompleted } = yield race({
      hide: take(`${ types[ 'DIALOG/HIDE' ] }:REMOVE_PROJECT`),
      removeCompleted: take(types[ 'PROJECT/REMOVE_COMPLETED' ]),
      removeFailed: take(types[ 'PROJECT/REMOVE_FAILED' ])
    })

    yield all([
      put(
        actions.mergeUIState(path, {
          isRemoveConfirmationDialogActive: false,

        })
      ),
      removeCompleted ?
        put(
          actions.requestLocation('/projects')
        ) : null
    ])
  }
}

export default {
  '/projects/:identifier/edit': {
    component: EditProject,
    exact: true,
    *state(path) {
      yield fork(watchGetProject, path)
      yield fork(watchRemoveProject, path)

      const { identifier } = yield select(selectors.currentParams)

      yield all([
        put(
          actions.getProject(identifier)
        ),
        put(
          actions.initializeUIState(path, {
            isRemoveConfirmationDialogActive: false
          })
        )
      ])
    }
  }
}