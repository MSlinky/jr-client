import { createStore } from 'redux'
import { localState, saveState } from './localStorage'

const persistedState = localState();

const reducer = (state, action) => {
  if (action.type === 'refreshShowsHistories') {
    return {
      ...state,
      showsHistories: action.showsHistories
    }
  }
  return state;
}

const store = createStore( reducer, persistedState )

store.subscribe(() => {
  saveState({
    showsHistories: store.getState().showsHistories ? store.getState().showsHistories : []
  });
})

export default store;