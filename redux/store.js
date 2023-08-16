import { configureStore } from '@reduxjs/toolkit';
import operatorSlices from './slices/operatorSlices';

const store = configureStore({
    reducer: {
        operator:operatorSlices.reducer,
    }
});

export default store;