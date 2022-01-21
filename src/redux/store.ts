import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/pokemon'

// All reducers come together in Root Reducer
const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})

// Create a new store
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  // Configure store with reducers and rtk query middleware
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']