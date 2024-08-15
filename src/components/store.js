import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './itemscounter';

export default configureStore({
        reducer: {
            items: itemsReducer
        }
});
