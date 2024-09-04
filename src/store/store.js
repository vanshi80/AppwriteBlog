import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';

const Store = configureStore({
    reducer: {
        auth: AuthSlice,
        //TODO: add more slices here for posts
    }
});


export default Store;