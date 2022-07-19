import {createSlice} from '@reduxjs/toolkit';

type AppType = {};

const initialState: AppType = {};

const app = createSlice({
    name: 'react-pizza/app',
    initialState,
    reducers: {}
});

const {reducer} = app;

export default reducer;
