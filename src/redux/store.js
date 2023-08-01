import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { searchBarReducer } from './searchBarSlice';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './userSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
//////////////////////////////////////////////
const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        user: persistReducer(userPersistConfig, userReducer),
        contacts: contactsReducer,
        filter: searchBarReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);