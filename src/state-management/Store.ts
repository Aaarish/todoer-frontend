import { configureStore } from '@reduxjs/toolkit'
import authContextSliceReducer from './AuthContextSlice'

export const store = configureStore({
    reducer: {
        authContextSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
