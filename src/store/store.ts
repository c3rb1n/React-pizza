import {configureStore} from '@reduxjs/toolkit';
import {BaseThunkAPI} from '@reduxjs/toolkit/dist/createAsyncThunk';

import * as reducer from './reducers';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAPIType = BaseThunkAPI<RootState, undefined, AppDispatch>;

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});
