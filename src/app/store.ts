import { configureStore } from '@reduxjs/toolkit';
import mainPageReducer from '../modules/main-page/slices';

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
