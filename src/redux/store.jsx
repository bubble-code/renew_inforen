import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { firebaseApiMain } from './Api/firebase-api-main';


const store = configureStore({
    reducer: {
        [firebaseApiMain.reducerPath]: firebaseApiMain.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(firebaseApiMain.middleware)
})

export default store;