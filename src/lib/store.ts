import { configureStore, Middleware } from '@reduxjs/toolkit'
import reducers from './reducers'

// Middleware to update localStorage
const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action)
  if (typeof localStorage !== 'undefined') {
    if (store.getState().toDo.list.length === 0) {
      localStorage.removeItem('savedToDoList')
    } else {
      localStorage.setItem('savedToDoList', JSON.stringify(store.getState()))
    }
  }
  return result
}

// Function to load state from localStorage
const loadState = () => {
  if (typeof localStorage === 'undefined') {
    return undefined
  }
  try {
    const serializedState = localStorage.getItem('savedToDoList')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export const makeStore = () => {
  const preloadedState = loadState()
  return configureStore({
    reducer: reducers,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']