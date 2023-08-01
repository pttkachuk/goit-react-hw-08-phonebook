import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUserRequest, logOutRequest, loginRequest, registerRequest } from 'services/api';

//REGISTER REQUEST
export const registerThunk = createAsyncThunk(
    'user/registerThunk',
    async (formData, thunkAPI) => {
        try {
            const data = await registerRequest(formData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//LOGIN REQUEST
export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async (formData, thunkAPI) => {
        try {
            const data = await loginRequest(formData);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//LOGOUT REQUEST
export const logOutThunk = createAsyncThunk(
    'user/logOutThunk',
    async (_, thunkAPI) => {
        try {
            await logOutRequest();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//REFRESH REQUEST
export const refreshUserThunk = createAsyncThunk(
    'user/refreshUserThunk',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.user.token;
        try {
            setToken(token); // Тут ми встановлюємо токен в хедери
            const data = await currentUserRequest(); // Тут ми робимо запит за даними користувача вже з токеном в хедерах
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);